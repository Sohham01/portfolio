export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tech: string[];
  featured: boolean;
  caseStudyUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  metrics?: { label: string; value: string }[];
  architecture?: { from: string; to: string; label: string }[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface NowFocus {
  number: string;
  title: string;
  description: string;
  tag: string;
  progress: number;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location?: string;
  description: string;
  highlights?: string[];
  tech?: string[];
}

export interface BuildLogItem {
  id: string;
  date: string;
  tag: string;
  title: string;
  summary: string;
  link?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "SOHHAM CHOUDHARY",
    title: "Data Science & Artificial Intelligence",
    institution: "IIM Sambalpur",
    degree: "BS Data Science & Artificial Intelligence",
    period: "2025 — 2029",
    location: "Sambalpur, Odisha, India",
    bio: "I'm Sohham Choudhary, a Data Science & AI student at IIM Sambalpur who enjoys turning ideas into useful products.",
    aboutLong: [
      "I'm currently pursuing a BS in Data Science & Artificial Intelligence at IIM Sambalpur.",
      "My interests sit at the intersection of software engineering, data, AI and product thinking.",
      "I enjoy taking a problem, understanding the underlying structure, building the system, and figuring out how to make the result genuinely useful."
    ],
    status: {
      text: "Open to opportunities",
      available: true
    },
    currentState: {
      building: "SalesMindAI",
      learning: "DSA + ML",
      exploring: "Product Engineering",
      status: "ONLINE"
    },
    socials: {
      github: "https://github.com/Sohham01",
      linkedin: "https://www.linkedin.com/in/sohham-choudhary-6b5015392/",
      email: "sohham63@gmail.com",
      secondaryEmail: "sohham63@gmail.com"
    }
  },

  pillars: [
    {
      code: "DATA",
      title: "DATA",
      step: "Analyze → Visualize → Understand",
      desc: "Transforming unstructured statistical noise into clean, interpretable analytical frameworks and decision systems."
    },
    {
      code: "AI",
      title: "AI",
      step: "Experiment → Model → Apply",
      desc: "Leveraging machine learning, deep neural networks, and generative AI APIs to solve specialized domain challenges."
    },
    {
      code: "SOFTWARE",
      title: "SOFTWARE",
      step: "Design → Build → Deploy",
      desc: "Crafting modular, high-performance backends, clean APIs, and structured full-stack client applications."
    },
    {
      code: "PRODUCT",
      title: "PRODUCT",
      step: "Problem → Solution → User",
      desc: "Bridging mathematical models and raw code into refined, intuitive interfaces that deliver real-world utility."
    }
  ],

  projects: [
    {
      id: "salesmindai",
      number: "01",
      title: "SalesMindAI",
      category: "AI / FULL STACK / PRODUCT",
      tagline: "AI-Powered CRM",
      description: "An AI-powered CRM designed to turn customer data and sales activity into actionable insights.",
      tech: ["React", "FastAPI", "PostgreSQL", "AI APIs"],
      featured: true,
      caseStudyUrl: "/projects/salesmindai",
      githubUrl: "https://github.com/Sohham01/SalesMindAI",
      demoUrl: "/projects/salesmindai/demo",
      metrics: [
        { label: "AI Engine", value: "Multi-provider fallback" },
        { label: "CRM Workflows", value: "Scoring · Health · Tasks" },
        { label: "Data Pipeline", value: "CSV/XLSX import & export" },
        { label: "Deployment", value: "Vercel (Live)" }
      ],
      architecture: [
        { from: "React", to: "FastAPI", label: "Client" },
        { from: "FastAPI", to: "PostgreSQL", label: "Backend" },
        { from: "PostgreSQL", to: "AI Providers", label: "Database" },
        { from: "AI Providers", to: "Tailwind CSS", label: "LLM Layer" }
      ]
    },
    {
      id: "f1-analysis",
      number: "02",
      title: "F1 Analysis",
      category: "DATA ANALYSIS",
      tagline: "Explore relationships between qualifying position, grid position and race results.",
      description: "A comprehensive data analysis project examining Formula 1 race telemetry across multiple racing seasons.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      featured: false,
      githubUrl: "https://github.com/Sohham01/F1-analysis-project",
      metrics: [
        { label: "Telemetry Records", value: "Multi-Season Dataset" },
        { label: "Correlation Focus", value: "Qualifying vs Race Finish" }
      ]
    },
    {
      id: "facial-emotion-recogniser",
      number: "03",
      title: "Facial Emotion Recogniser",
      category: "MACHINE LEARNING",
      tagline: "Real-time facial emotion recognition using a CNN trained on FER-2013.",
      description: "Deep learning computer vision application that processes video streams to classify human expressions.",
      tech: ["Python", "TensorFlow", "CNN", "OpenCV"],
      featured: false,
      githubUrl: "https://github.com/Sohham01/Facial-recognition",
      metrics: [
        { label: "Model Architecture", value: "Custom 4-Block CNN" },
        { label: "Training Dataset", value: "FER-2013 Dataset" }
      ]
    },
    {
      id: "svd-image-compression",
      number: "04",
      title: "SVD Image Compression",
      category: "LINEAR ALGEBRA",
      tagline: "Image compression experiment exploring matrix rank and reconstruction quality.",
      description: "Mathematical computing project applying Singular Value Decomposition (SVD) to digital image matrices.",
      tech: ["Python", "NumPy", "SciPy", "Matplotlib"],
      featured: false,
      githubUrl: "https://github.com/Sohham01/SVD-Image-Compression",
      metrics: [
        { label: "Core Concept", value: "Low-Rank Matrix Approx" },
        { label: "Evaluation", value: "PSNR & Energy Spectrum" }
      ]
    },
    {
      id: "ai-resume-analyzer",
      number: "05",
      title: "AI Resume Analyzer",
      category: "AI / NLP / PRODUCT",
      tagline: "Intelligent resume parser and ATS alignment feedback engine.",
      description: "An AI-assisted document parsing application analyzing candidate resumes against job descriptions.",
      tech: ["Python", "Streamlit", "NLP", "PyPDF2"],
      featured: false,
      githubUrl: "https://github.com/Sohham01/AI_Resume_Analyzer",
      metrics: [
        { label: "Core Focus", value: "ATS Match Scoring" },
        { label: "Document Processing", value: "PDF & Text Parsing" }
      ]
    }
  ] as Project[],

  experience: [
    {
      period: "July 2026",
      role: "Program Analytics Intern",
      organization: "Srijan-Ek Soch",
      description: "Contributed to Srijan Currymate through dashboard development and CSR/donor presentation work, while conducting workshops on team management, Excel, and event organization."
    }
  ] as ExperienceItem[],

  skills: [
    {
      title: "LANGUAGES",
      skills: ["Python", "JavaScript / TypeScript", "SQL"]
    },
    {
      title: "DATA",
      skills: ["Pandas", "NumPy", "Matplotlib", "Power BI", "Tableau", "Excel"]
    },
    {
      title: "AI / ML",
      skills: ["Scikit-learn", "TensorFlow", "CNN", "Machine Learning"]
    },
    {
      title: "DEVELOPMENT",
      skills: ["React", "Next.js", "FastAPI", "PostgreSQL", "Git"]
    },
    {
      title: "CONCEPTS",
      skills: ["Data Structures & Algorithms", "Statistics", "Linear Algebra", "Data Analysis", "Product Thinking"]
    }
  ] as SkillCategory[],

  nowFocus: [
    {
      number: "01",
      title: "DSA",
      description: "Building stronger problem-solving fundamentals through consistent algorithm practice.",
      tag: "CORE",
      progress: 88
    },
    {
      number: "02",
      title: "MACHINE LEARNING",
      description: "Moving beyond introductory models and developing a deeper understanding of ML systems.",
      tag: "AI",
      progress: 82
    },
    {
      number: "03",
      title: "SOFTWARE ENGINEERING",
      description: "Building larger systems instead of isolated projects.",
      tag: "SYSTEMS",
      progress: 85
    },
    {
      number: "04",
      title: "PRODUCT",
      description: "Learning how technical decisions translate into useful products.",
      tag: "PRODUCT",
      progress: 80
    }
  ] as NowFocus[],

  buildLogData: {
    date: "AUG 2026",
    latestProject: { name: "SalesMindAI", desc: "AI-powered CRM platform", status: "active" },
    currentExperiment: { name: "RAG-based AI assistant", desc: "with document memory" },
    currentlyLearning: { name: "Advanced ML & System Design", desc: "" },
    latestRepository: { name: "github.com/sohham-choudhary/salesmindai", url: "https://github.com/Sohham01/SalesMindAI" },
    totalContributions: 300,
    year: 2026
  }
};
