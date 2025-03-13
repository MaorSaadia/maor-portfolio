import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";
import TruncatedDescription from "../TruncatedDescription";
import project from "./Projects";

interface LinkButtonProps {
  href?: string;
  icon: IconType;
  text: string;
  className?: string;
}

const Work = () => {
  const uniqueCategories = Array.from(
    new Set(project.map((item) => item.category))
  );
  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category })),
  ];
  const [tabValue, setTabValue] = useState("all");
  const [visibleItems, setVisibleItems] = useState(6);
  const filterWork =
    tabValue === "all"
      ? project.filter((item) => item.category !== "all")
      : project.filter((item) => item.category === tabValue);

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
