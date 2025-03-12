import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";
import TruncatedDescription from "../TruncatedDescription";

// Type definitions
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

interface LinkButtonProps {
  href?: string;
  icon: IconType;
  text: string;
  className?: string;
}

const data: Project[] = [
  {
    href: "https://www.ai-resume-craft.com",
    demoUrl: undefined,
    githubUrl: "https://github.com/MaorSaadia/resume-craft",
    category: "FullStack",
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
    category: "FullStack",
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

const Work = () => {
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );
  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category })),
  ];
  const [tabValue, setTabValue] = useState("all");
  const [visibleItems, setVisibleItems] = useState(6);
  const filterWork =
    tabValue === "all"
      ? data.filter((item) => item.category !== "all")
      : data.filter((item) => item.category === tabValue);

  const loadMoreItems = () => setVisibleItems((prev) => prev + 2);

  // Link button component with TypeScript types
  const LinkButton: React.FC<LinkButtonProps> = ({
    href,
    icon: Icon,
    text,
    className = "",
  }) => {
    if (!href) return null;

    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon size={16} />
        <span>{text}</span>
      </motion.a>
    );
  };

  const ViewCodeButton: React.FC<{ href?: string }> = ({ href }) => {
    if (!href) return null;

    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 right-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGithub size={16} />
        <span>View Code</span>
      </motion.a>
    );
  };

  return (
    <section className="pt-24 min-h-[1000px]" id="work">
      <div className="container mx-auto">
        <Tabs defaultValue="all" className="w-full flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
            <AnimatedText
              text="My Latest Work"
              textStyles="h2 mb-[30px] xl:mb-0"
            />
            <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
              {tabData.map((item, index) => (
                <TabsTrigger
                  value={item.category}
                  key={index}
                  className="capitalize w-[120px] flex items-center justify-center dark:text-white/80"
                  onClick={() => setTabValue(item.category)}
                >
                  {item.category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <TabsContent value={tabValue} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <AnimatePresence>
                {filterWork.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-[#4b4b4b] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                  >
                    <WorkItem {...item} />
                    <div className="mt-4 space-y-4 pb-14">
                      <TruncatedDescription text={item.description} />

                      <div className="flex flex-wrap gap-3">
                        {item.techStack.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center bg-gray-50 rounded-full px-4 py-2 hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.div
                              className="relative"
                              whileHover={{ scale: 1.4 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Image
                                src={tech.logo}
                                alt={tech.name}
                                width={38}
                                height={38}
                                className="w-5 h-5 mr-2 cursor-pointer"
                              />
                            </motion.div>
                            <span className="text-sm font-medium text-gray-700">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Demo button only */}
                      <div className="flex flex-wrap gap-4 mt-6">
                        <LinkButton
                          href={item.demoUrl}
                          icon={FaExternalLinkAlt}
                          text="Demo"
                          className="absolute bottom-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-accent text-white hover:bg-accent/80 duration-300"
                        />
                      </div>
                    </div>

                    {/* View Code button positioned absolutely */}
                    <ViewCodeButton href={item.githubUrl} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {visibleItems < filterWork.length && (
              <div className="flex justify-center mt-12">
                <motion.button
                  onClick={loadMoreItems}
                  className="btn btn-accent"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Load more
                </motion.button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
