interface TechStack {
  name: string;
  logo: string;
}

interface Project {
  href: string | undefined;
  demoUrl?: string | undefined;
  githubUrl?: string;
  category: string;
  img: string;
  title: string;
  description: string;
  techStack: TechStack[];
}

const project: Project[] = [
  {
    href: "/",
    demoUrl: undefined,
    githubUrl: "https://github.com/MaorSaadia/maor-portfolio.git",
    category: "Frontend",
    img: "/assets/work/new-portfolio.png",
    title: "My New Portfolio",
    description:
      "My portfolio website crafted with React.js, Next.js, and Tailwind CSS, featuring smooth Framer Motion animations and dark mode support. Clean, modern, and responsive design that delivers an engaging user experience.",
    techStack: [
      { name: "NextJs", logo: "/assets/icons/nextjs.svg" },
      { name: "TypeScript", logo: "/assets/icons/typescript.svg" },
      { name: "TailwindCss", logo: "/assets/icons/tailwind.svg" },
      { name: "Framer Motion", logo: "/assets/icons/framer-motion.svg" },
    ],
  },
  {
    href: "https://www.ai-resume-craft.com",
    demoUrl: undefined,
    githubUrl: "https://github.com/MaorSaadia/resume-craft",
    category: "SaaS",
    img: "/assets/work/airesume-craft.png",
    title: "AIResumeCraft - SaaS Platform",
    description:
      "AIResumeCraft is a SaaS AI-powered resume creation platform. I developed and launched this platform, integrating secure authentication with Clerk to protect user data. The platform also features a tiered subscription model with Lemon Squeezy integration for payment processing. Gemini AI powers the resume creation, offering automated content generation and personalized suggestions to help users create professional resumes quickly.",
    techStack: [
      { name: "Next.js", logo: "/assets/icons/nextjs.svg" },
      { name: "TypeScript", logo: "/assets/icons/typescript.svg" },
      { name: "Tailwind CSS", logo: "/assets/icons/tailwind.svg" },
      { name: "Clerk", logo: "/assets/icons/clerk.svg" },
      { name: "Zustand", logo: "/assets/icons/zustand.svg" },
      { name: "Lemon Squeezy", logo: "/assets/icons/lemon-squeezy.svg" },
      { name: "Gemini AI", logo: "/assets/icons/gemini.svg" },
    ],
  },
  {
    href: "https://www.mishbaby.com",
    demoUrl: undefined,
    githubUrl: "https://github.com/MaorSaadia/MishBabyStore",
    category: "E-commerce",
    img: "/assets/work/mishbaby.png",
    title: "Mishbaby - Ecommerce Platform",
    description:
      "Mishbaby is a full-featured e-commerce platform developed with Next.js. The website integrates Wix Studio for backend operations, enabling smooth product management and payment processing, including cart and checkout features. I used Tailwind CSS to create a responsive design, ensuring an optimal user experience across devices and enhancing overall user engagement.",
    techStack: [
      { name: "Next.js", logo: "/assets/icons/nextjs.svg" },
      { name: "TypeScript", logo: "/assets/icons/typescript.svg" },
      { name: "Tailwind CSS", logo: "/assets/icons/tailwind.svg" },
      { name: "Wix Studio", logo: "/assets/icons/wix.svg" },
    ],
  },
  {
    href: "https://www.alitrendsfinds.com",
    demoUrl: undefined,
    githubUrl: "https://github.com/MaorSaadia/AliTrendsFinds",
    category: "E-commerce",
    img: "/assets/work/alitrendsfinds.png",
    title: "AliTrendsFinds - Affiliate E-commerce Platform",
    description:
      "AliTrendsFinds is a responsive affiliate e-commerce platform that features categorized product listings sourced from AliExpress. The platform includes a dynamic search functionality for efficient product discovery and an improved user experience. It integrates Sanity CMS for streamlined content management, allowing real-time updates and enhanced control over product presentation and website content. Built with modern web development practices, it is optimized for both desktop and mobile devices.",
    techStack: [
      { name: "Next.js", logo: "/assets/icons/nextjs.svg" },
      { name: "TypeScript", logo: "/assets/icons/typescript.svg" },
      { name: "Tailwind CSS", logo: "/assets/icons/tailwind.svg" },
      { name: "Sanity CMS", logo: "/assets/icons/sanity.svg" },
    ],
  },
  {
    href: undefined,
    demoUrl: "https://www.youtube.com/watch?v=qAoGZq1lOSU&ab_channel=FindeRent",
    githubUrl: "https://github.com/FinderRent/FinderRent.git",
    category: "Apps",
    img: "/assets/work/finde-rent.png",
    title: "FindeRent App",
    description:
      "FindeRent is a mobile app platform developed as a final project at SCE College. It connects students with landlords to streamline apartment searches near academic institutions. The app integrates the Google Maps API to provide interactive maps and detailed property listings, enhancing the user experience and facilitating informed decisions. Additionally, it features real-time chat functionality using Socket.io, fostering instant communication between users and facilitating prompt responses.",
    techStack: [
      { name: "React Native", logo: "/assets/icons/react.svg" },
      { name: "JavaScript", logo: "/assets/icons/javascript.svg" },
      { name: "Expo", logo: "/assets/icons/expo.svg" },
      { name: "NodeJs", logo: "/assets/icons/nodejs.svg" },
      { name: "Express", logo: "/assets/icons/express.svg" },
      { name: "MongoDB", logo: "/assets/icons/mongodb.svg" },
      { name: "CSS", logo: "/assets/icons/css.svg" },
      { name: "Cloudinary", logo: "/assets/icons/cloudinary.svg" },
    ],
  },
  {
    href: "https://luxe-aura.vercel.app/",
    demoUrl: undefined,
    githubUrl: "https://github.com/MaorSaadia/LuxeAura.git",
    category: "FullStack",
    img: "/assets/work/luxeAura-store.png",
    title: "Full Stack E-Commerce luxeAura Store",
    description:
      "A simple online shopping experience developed with Next.js 14, featuring dynamic product browsing, interactive cart functionality, and secure Stripe payment integration. Designed with responsive Tailwind CSS, the platform offers product filtering, detailed product pages, and a smooth checkout process, user-friendly interface for customers.",
    techStack: [
      { name: "NextJs", logo: "/assets/icons/nextjs.svg" },
      { name: "TypeScript", logo: "/assets/icons/typescript.svg" },
      { name: "TailwindCss", logo: "/assets/icons/tailwind.svg" },
      { name: "Prisma", logo: "/assets/icons/prisma.svg" },
      { name: "PostgreSql", logo: "/assets/icons/postgresql.svg" },
    ],
  },
  {
    href: "https://ecommerce-admin-nine-zeta.vercel.app/",
    demoUrl: undefined,
    githubUrl: "https://github.com/MaorSaadia/ecommerce-admin.git",
    category: "FullStack",
    img: "/assets/work/dashboard-admin.png",
    title: "Full Stack E-Commerce Admin Dashboard",
    description:
      "A comprehensive management platform built with Next.js 14, React, and Tailwind CSS, enabling multi-store administration. Features secure authentication, real-time sales analytics, and centralized control over product categories, sizes, colors, and inventory. Implemented robust PostgreSQL database management using Prisma, with intuitive UI for seamless store configuration, order tracking, and performance monitoring.",
    techStack: [
      { name: "NextJs", logo: "/assets/icons/nextjs.svg" },
      { name: "TypeScript", logo: "/assets/icons/typescript.svg" },
      { name: "TailwindCss", logo: "/assets/icons/tailwind.svg" },
      { name: "Prisma", logo: "/assets/icons/prisma.svg" },
      { name: "PostgreSql", logo: "/assets/icons/postgresql.svg" },
    ],
  },
  {
    href: "https://maor-saadia-portfolio.vercel.app/",
    demoUrl: undefined,
    githubUrl: "https://github.com/MaorSaadia/MyPortfolio.git",
    category: "Frontend",
    img: "/assets/work/old-portfoilo.png",
    title: "My Old Portfolio",
    description:
      "My old portfolio - built with Next.js, featuring dynamic animations using Framer Motion and styled with Tailwind CSS. This responsive site includes a dark theme mode for a beautiful and comfortable browsing experience.",
    techStack: [
      { name: "Next.js", logo: "/assets/icons/nextjs.svg" },
      { name: "JavaScript", logo: "/assets/icons/javascript.svg" },
      { name: "TailwindCss", logo: "/assets/icons/tailwind.svg" },
      { name: "Framer Motion", logo: "/assets/icons/framer-motion.svg" },
    ],
  },
];

export default project;
