import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        } else {
          entry.target.classList.remove('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.08,
      rootMargin: '10px 0px -30px 0px',
    });

    const registerElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => observer.observe(el));
    };

    registerElements();

    // Observe DOM mutations so dynamically added elements are automatically observed
    const mutationObserver = new MutationObserver(() => {
      registerElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
