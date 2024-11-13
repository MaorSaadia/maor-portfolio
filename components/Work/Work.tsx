import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";

// Type definitions
interface TechStack {
  name: string;
  logo: string;
}

interface Project {
  href: string;
  demoUrl?: string;
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
    href: "/",
    demoUrl: "https://maor-saadia-new-portfolio.vercel.app/",
    githubUrl: "https://github.com/username/project1",
    category: "Frontend",
    img: "/assets/work/new-portfolio.png",
    title: "My New Portfolio",
    description:
      "A comprehensive fullstack application for managing user data and analytics.",
    techStack: [
      { name: "React", logo: "/assets/icons/react.svg" },
      { name: "Next.js", logo: "/assets/icons/nextjs.svg" },
      { name: "Node.js", logo: "/assets/icons/nodejs.svg" },
    ],
  },
  {
    href: "/",
    demoUrl: "https://demo-project1.com",
    githubUrl: "https://github.com/username/project1",
    category: "Apps",
    img: "/assets/work/thumb-2.png",
    title: "Project 2",
    description:
      "A mobile app for task management with real-time notifications.",
    techStack: [
      { name: "React Native", logo: "/assets/icons/react-native.svg" },
      { name: "Expo", logo: "/assets/icons/expo.svg" },
    ],
  },
  {
    href: "/",
    demoUrl: "https://demo-project1.com",
    githubUrl: "https://github.com/username/project1",
    category: "Fullstack",
    img: "/assets/work/thumb-3.png",
    title: "Project 3",
    description:
      "An e-commerce platform with advanced search and payment integration.",
    techStack: [
      { name: "Next.js", logo: "/assets/icons/nextjs.svg" },
      { name: "Express", logo: "/assets/icons/express.svg" },
      { name: "MongoDB", logo: "/assets/icons/mongodb.svg" },
    ],
  },
  {
    href: "/",
    demoUrl: "https://demo-project1.com",
    githubUrl: "https://github.com/username/project1",
    category: "Frontend",
    img: "/assets/work/thumb-4.png",
    title: "Project 4",
    description: "A modern, responsive landing page for a marketing campaign.",
    techStack: [
      { name: "HTML", logo: "/assets/icons/html.svg" },
      { name: "CSS", logo: "/assets/icons/css.svg" },
      { name: "JavaScript", logo: "/assets/icons/javascript.svg" },
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
                  className="capitalize w-[120px] flex items-center justify-center"
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
                    className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <WorkItem {...item} />
                    <div className="mt-4 space-y-4">
                      <p className="text-sm text-gray-700">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {item.techStack.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center bg-gray-50 rounded-full px-4 py-2 hover:bg-gray-100 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.div
                              className="relative"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Image
                                src={tech.logo}
                                alt={tech.name}
                                width={38}
                                height={38}
                                className="w-5 h-5 mr-2"
                              />
                            </motion.div>
                            <span className="text-sm font-medium text-gray-700">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      {/* Project Links Section */}
                      <div className="flex flex-wrap gap-4 mt-6">
                        <LinkButton
                          href={item.demoUrl}
                          icon={FaExternalLinkAlt}
                          text="Live Demo"
                          className="bg-accent text-white hover:bg-accent/80"
                        />
                        <LinkButton
                          href={item.githubUrl}
                          icon={FaGithub}
                          text="View Code"
                          className="bg-gray-800 text-white hover:bg-gray-700"
                        />
                      </div>
                    </div>
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
