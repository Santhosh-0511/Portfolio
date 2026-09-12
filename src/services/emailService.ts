import emailjs from '@emailjs/browser';

export interface EmailData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface SendEmailResult {
  success: boolean;
  method: 'emailjs' | 'web3forms' | 'mailto';
  message: string;
}

export function getEmailServiceStatus(): {
  configured: boolean;
  activeProvider: 'emailjs' | 'web3forms' | 'mailto';
  recipient: string;
} {
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const web3formsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
    return { configured: true, activeProvider: 'emailjs', recipient: 'santhoshpalnati11@gmail.com' };
  }
  if (web3formsAccessKey) {
    return { configured: true, activeProvider: 'web3forms', recipient: 'santhoshpalnati11@gmail.com' };
  }
  return { configured: false, activeProvider: 'mailto', recipient: 'santhoshpalnati11@gmail.com' };
}

/**
 * Send contact email with automatic fallback:
 * 1. EmailJS (Direct Gmail SMTP service)
 * 2. Web3Forms (Direct inbox forwarding)
 * 3. Mailto (Local client dispatch fallback)
 */
export async function sendContactEmail(data: EmailData): Promise<SendEmailResult> {
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const web3formsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  // 1. Try EmailJS if configured
  if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
    try {
      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject || 'Portfolio Inquiry',
          message: data.message,
          to_email: 'santhoshpalnati11@gmail.com',
        },
        emailjsPublicKey
      );

      return {
        success: true,
        method: 'emailjs',
        message: 'Message delivered directly to Santhosh\'s Gmail inbox via EmailJS!',
      };
    } catch (err) {
      console.warn('EmailJS delivery failed, trying fallback...', err);
    }
  }

  // 2. Try Web3Forms if configured
  if (web3formsAccessKey) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          name: data.name,
          email: data.email,
          subject: data.subject || 'Portfolio Inquiry',
          message: data.message,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const result = await response.json();
      if (result.success) {
        return {
          success: true,
          method: 'web3forms',
          message: 'Message forwarded directly to Santhosh\'s Gmail inbox via Web3Forms!',
        };
      }
    } catch (err) {
      console.warn('Web3Forms delivery failed, trying fallback...', err);
    }
  }

  // 3. Graceful Mail Client Fallback
  const mailtoUrl = `mailto:santhoshpalnati11@gmail.com?subject=${encodeURIComponent(
    `[Portfolio Inquiry] ${data.subject || 'Opportunity Discussion'}`
  )}&body=${encodeURIComponent(
    `From: ${data.name} (${data.email})\n\nMessage:\n${data.message}`
  )}`;

  window.location.href = mailtoUrl;

  return {
    success: true,
    method: 'mailto',
    message: 'Pre-filled message dispatched to your email client addressed to santhoshpalnati11@gmail.com.',
  };
}
