/*
 * ─────────────────────────────────────────────────────────
 *  PORTFOLIO CONFIGURATION
 *  Edit this file to update all website content.
 *  Images go in /public/images/ — reference them as "/images/filename.ext"
 *  Resume PDF goes in /public/ — reference it as "/resume.pdf"
 * ─────────────────────────────────────────────────────────
 */

export const siteConfig = {
  name: "Aryan Bisshnoi",
  role: "Frontend-Focused Full Stack Engineer",
  headline:
    "Frontend-focused Full Stack Engineer building scalable enterprise web applications with React, TypeScript, Java, and Spring Boot.",
  email: "aryanbisshnoi@gmail.com",
  linkedin: "https://www.linkedin.com/in/aryanbisshnoi/",
  github: "https://github.com/aryanbisshnoi",
  resumePath: "/resume.pdf", // Place your resume PDF at /public/resume.pdf
  profileImage: "/images/profile.jpg", // Place your photo at /public/images/profile.jpg
  seo: {
    title: "Aryan Bisshnoi — Frontend-Focused Full Stack Engineer",
    description:
      "Portfolio of Aryan Bisshnoi — Software Engineer with 3+ years of experience building scalable enterprise web applications using React, TypeScript, Java, and Spring Boot.",
    url: "https://aryanbisshnoi.com", // Update with your actual domain
    ogImage: "/images/og-image.png", // Place an OG image at /public/images/og-image.png (1200×630)
  },
};

export const heroData = {
  greeting: "Hi, I'm",
  name: "Aryan Bisshnoi",
  tagline: siteConfig.headline,
  summary:
    "Software Engineer with 3+ years of experience in enterprise product development. I build performant, accessible interfaces and scalable backend services — currently contributing to a core digital banking platform used across multiple product lines.",
  cta: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Download Resume", href: siteConfig.resumePath },
  },
};

export const aboutData = {
  heading: "About Me",
  paragraphs: [
    "I'm a Software Engineer 2 working in a core digital banking product team, where I build and ship high-impact features across multiple parallel projects. My primary focus is on frontend — creating fast, accessible, and maintainable interfaces using React.js, TypeScript, and Material UI.",
    "On the backend, I work with Java and Spring Boot to develop and maintain RESTful APIs that power the products I help build. I've modernized legacy UI workflows, built reusable component libraries, centralized organization-wide documentation, and contributed to cloud deployments on GCP and Kubernetes.",
    "I'm looking for frontend-heavy full stack engineering roles where I can take ownership of meaningful product features, collaborate with cross-functional teams, and continue growing as an engineer who bridges design and infrastructure.",
  ],
  highlights: [
    { label: "Experience", value: "3+ Years" },
    { label: "Current Role", value: "Software Engineer 2" },
    { label: "Focus", value: "Frontend / Full Stack" },
  ],
};

export const skillsData = {
  heading: "Skills & Tech Stack",
  categories: [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Material UI",
      ],
    },
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "REST APIs", "Node.js"],
    },
    {
      title: "Tools / Cloud / Testing",
      skills: [
        "Git",
        "Jenkins",
        "Maven",
        "Google Cloud Platform",
        "Kubernetes",
        "Shell Scripting",
        "Nightwatch.js",
        "Docusaurus",
      ],
    },
  ],
};

export const projectsData = {
  heading: "Featured Projects",
  projects: [
    {
      title: "Documentation Platform",
      stack: ["React", "Docusaurus", "CSS"],
      description:
        "Built an organization-wide documentation platform from scratch as the initial solo developer. Centralized product and API docs across teams with reusable components and intuitive navigation, bringing together 160+ internal documents and reducing new developer onboarding time by around 50%.",
      impacts: [
        "Built from scratch as initial solo developer",
        "160+ internal documents centralized",
        "Reduced onboarding time by ~50%",
        "Multiple releases and production deployments",
      ],
      // Add a link when available: link: "https://..."
      link: null,
      // Place a screenshot at /public/images/project-docs.png
      image: null,
      gradient: "from-amber-100 to-orange-100 dark:from-amber-950/40 dark:to-orange-950/40",
    },
    {
      title: "Enterprise UI Revamp",
      stack: ["React", "TypeScript", "CSS", "Material UI"],
      description:
        "Modernized a legacy enterprise banking application by revamping 20+ screens with modern React-based interfaces and CSS updates. Built reusable UI components and improved design consistency across modules while reducing page load times by around 30%.",
      impacts: [
        "Revamped 20+ screens",
        "Reduced page load times by ~30%",
        "Built reusable UI components",
        "Improved UI consistency across modules",
      ],
      link: null,
      image: null,
      gradient: "from-blue-100 to-indigo-100 dark:from-blue-950/40 dark:to-indigo-950/40",
    },
    {
      title: "AI / Agentic Project",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      description:
        "An upcoming personal project exploring AI-powered agentic workflows. Details will be shared once development is underway — stay tuned.",
      impacts: [],
      link: null,
      image: null,
      gradient: "from-emerald-100 to-teal-100 dark:from-emerald-950/40 dark:to-teal-950/40",
      upcoming: true,
    },
  ],
};

export const experienceData = {
  heading: "Experience",
  roles: [
    {
      title: "Software Engineer 2",
      company: "Candescent",
      duration: "March 2025 – Present",
      points: [
        "Working in a core digital banking product team as a full-stack developer, primarily focusing on frontend using React.js, TypeScript, and MUI, while contributing to backend services in Java and Spring Boot",
        "Led the UI revamp of a legacy enterprise banking application by modernizing 20+ screens, reducing page load times by ~30%",
        "Delivered features across three parallel projects and supported 10+ modules",
        "Built an organization-wide documentation hub from scratch as the initial solo developer",
        "Brought together 160+ internal docs and reduced developer onboarding time by ~50%",
        "Handled end-to-end delivery and production deployments",
      ],
    },
    {
      title: "Software Engineer 1",
      company: "Candescent",
      duration: "July 2022 – March 2025",
      points: [
        "Developed and maintained RESTful APIs using Java and Spring Boot",
        "Automated repetitive workflows using shell scripting, reducing manual effort by ~40%",
        "Implemented UI automation using Nightwatch.js, reducing manual testing effort by ~80%",
        "Worked with GCP and Kubernetes for deployment and monitoring",
        "Resolved security vulnerabilities identified through Mend (WhiteSource)",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Data Ingenious Global Ltd",
      duration: "Apr 2021 – June 2021",
      points: [
        "Developed internal tools using the MERN stack",
        "Built and integrated REST APIs",
        "Refactored frontend components to improve responsiveness and usability across internal tools",
      ],
    },
  ],
};

export const resumeCtaData = {
  heading: "Interested in working together?",
  description:
    "I'm currently exploring new opportunities in frontend-heavy full stack engineering. If my experience aligns with what you're looking for, I'd love to connect.",
  buttonLabel: "Download Resume",
  buttonHref: siteConfig.resumePath,
};

export const contactData = {
  heading: "Get in Touch",
  description:
    "Whether you're a recruiter, hiring manager, or fellow engineer — I'm always open to connecting. Feel free to reach out through any of the channels below.",
  email: siteConfig.email,
  linkedin: siteConfig.linkedin,
  github: siteConfig.github,
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
