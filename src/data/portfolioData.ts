export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: string[];
  bullets: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  category: 'AI / ML' | 'Full-Stack';
}

export interface Achievement {
  id: string;
  title: string;
  platform:
    | 'Codeforces'
    | 'LeetCode'
    | 'CodeChef'
    | 'Open Source'
    | 'Competitive';
  badge: string;
  rating?: string;
  rankHighlight?: string;
  description: string;
  link: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "P Santhosh Sri Sai Ram",
    shortName: "Santhosh",

    tagline: "Computer Science Undergraduate | AI & Backend Developer",

    institution: "IIIT Lucknow",
    degree: "B.Tech in Computer Science",
    duration: "Aug. 2024 – Present",
    gpa: "7.92",

    email: "santhoshpalnati11@gmail.com",
    phone: "+91 6301437702",
    location: "Lucknow, India",

    bio:
      "I build AI-powered applications, scalable backend systems, and full-stack products while solving complex algorithmic problems. My interests include AI/ML, backend engineering, and competitive programming.",

    statusBadge: "B.Tech CSE · IIIT Lucknow",

    stats: [
      {
        label: "DSA Solved",
        value: "900+",
        detail: "Across CP platforms",
      },
      {
        label: "LeetCode Rating",
        value: "1945",
        detail: "Knight Title",
      },
      {
        label: "Codeforces",
        value: "1425",
        detail: "Specialist Title",
      },
      {
        label: "CodeChef",
        value: "1618",
        detail: "3-Star Rated",
      },
      {
        label: "Hacktoberfest",
        value: "10+",
        detail: "Merged PRs",
      },
      {
        label: "Current CGPA",
        value: "7.92",
        detail: "IIIT Lucknow",
      },
    ],
  },

  socials: {
    github: "https://github.com/Santhosh-0511",
    linkedin:
      "https://www.linkedin.com/in/santhosh-palnati-b2b859327/",
    leetcode: "https://leetcode.com/u/Santhosh1105/",
    codeforces: "https://codeforces.com/profile/Santhosh_1105",
    codechef: "https://www.codechef.com/users/santhosh11_05",
    email: "mailto:santhoshpalnati11@gmail.com",
    phone: "tel:+916301437702",
  },

  education: {
    college: "Indian Institute of Information Technology, Lucknow",
    degree: "Bachelor of Technology in Computer Science",
    period: "Aug. 2024 – Present",
    gpa: "7.92 / 10.0",
    location: "Lucknow, Uttar Pradesh, India",

    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems (OS)",
    ],

    leadership: {
      role: "Member, Dramatics Society (Goonj)",
      organization: "IIIT Lucknow",
      period: "Aug 2025 – Present",
      description:
        "Mentored 150+ students in rehearsals and live theatrical performances for the official institute-led society. Co-organized cultural festivals, stage productions, and inter-college theatrical competitions.",
    },
  },

  achievements: [
  {
    id: "cf-specialist",
    platform: "Codeforces",
    title: "Specialist",
    badge: "Specialist Title",
    rating: "Max: 1425",
    rankHighlight: "1480th globally · Round 1108 (Div. 2)",
    description:
      "Competitive programmer focused on algorithms, data structures, mathematics, and efficient problem solving.",
    link: "https://codeforces.com/profile/Santhosh_1105",
  },

  {
    id: "lc-knight",
    platform: "LeetCode",
    title: "Knight",
    badge: "Knight Title",
    rating: "Max: 1945",
    rankHighlight: "363rd globally · Weekly 499 · 1247th · Biweekly 186",
    description:
      "Strong focus on algorithms, dynamic programming, graphs, data structures, and contest problem solving.",
    link: "https://leetcode.com/u/Santhosh1105/",
  },

  {
    id: "cc-3star",
    platform: "CodeChef",
    title: "3-Star",
    badge: "3-Star Coder",
    rating: "Max: 1618",
    rankHighlight: "154th · Starters 237 · 233rd · Starters 236",
    description:
      "Regular competitive programming participant focused on algorithmic problem solving and optimization.",
    link: "https://www.codechef.com/users/santhosh11_05",
  },

  {
    id: "hacktoberfest",
    platform: "Open Source",
    title: "SuperContributor",
    badge: "Hacktoberfest 2025",
    rating: "10+ Merged PRs",
    rankHighlight: "SuperContributor Award",
    description:
      "Contributed to open-source projects during Hacktoberfest 2025 with 10+ successfully merged pull requests.",
    link: "https://github.com/Santhosh-0511",
  },
] as Achievement[],

  projects: [
    {
      id: "road-sense",
      title: "Road-Sense",
      subtitle: "AI-Powered Driver Safety & Monitoring System",
      category: "AI / ML",
      featured: true,

      description:
        "A computer vision-based road safety application for real-time driver monitoring, route planning, and vehicle document management.",

      tags: [
        "OpenCV",
        "YOLOv8",
        "CNNs",
        "Google Maps",
        "Flask",
        "Firebase",
        "MERN",
      ],

      metrics: [
        "1,000+ Concurrent Users",
        "Real-Time Monitoring",
        "Audio Alerts",
      ],

      bullets: [
        "Built a real-time monitoring module using OpenCV and YOLOv8 to detect driver fatigue and seatbelt usage, triggering audio alerts.",

        "Integrated Google Maps for route planning and built vehicle document storage with automated expiration tracking.",

        "Developed an analytics dashboard to evaluate driver distraction events and generate a post-trip safety score.",

        "Optimized the video inference pipeline for low latency and load-tested the backend to support up to 1,000 concurrent users.",
      ],

      githubUrl: "https://github.com/kad-link/Road-Sense",
      liveUrl: "https://road-sense-coral.vercel.app/",
    },

    {
      id: "medi-share",
      title: "Medi Share",
      subtitle: "AI-Powered Medicine Donation Platform",
      category: "Full-Stack",
      featured: true,

      description:
        "An AI-powered platform for medicine donation, matching, inventory management, and logistics.",

      tags: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Google Gemini",
        "OCR.space",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],

      metrics: [
        "100+ Donations / Cycle",
        "30% Less Medical Waste",
        "90%+ Matching Accuracy",
      ],

      bullets: [
        "Built a medicine donation platform capable of processing 100+ donations per cycle, helping reduce medical waste by 30%.",

        "Integrated OCR.space and Google Gemini for automated text extraction and medicine matching, achieving over 90% accuracy.",

        "Designed a role-based architecture supporting 4 user types with automated approval workflows and map-based logistics routing.",

        "Developed REST APIs using FastAPI and PostgreSQL for inventory updates and retrieval of donation records.",
      ],

      githubUrl: "https://github.com/Lochit-Vinay/MediShare_V2",
    },
  ] as Project[],

  skills: [
    {
      title: "Programming Languages",
      skills: [
        "C++",
        "Python",
        "JavaScript",
        "Java",
        "Bash",
      ],
    },

    {
      title: "Machine Learning & AI",
      skills: [
        "LLMs",
        "RAG",
        "NLP",
        "OpenCV",
        "TensorFlow",
        "Scikit-learn",
        "LangChain",
        "Hugging Face",
      ],
    },

    {
      title: "Backend & Frameworks",
      skills: [
        "FastAPI",
        "Flask",
        "Node.js",
        "REST APIs",
      ],
    },

    {
      title: "Frontend",
      skills: [
        "React.js",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },

    {
      title: "Databases & Cloud",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Vector Databases",
      ],
    },

    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Google Colab",
        "VS Code",
        "Streamlit",
        "Linux",
      ],
    },
  ] as SkillCategory[],
};