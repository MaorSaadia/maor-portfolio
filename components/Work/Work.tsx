import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";

// sample data for projects with various categories
const data = [
  {
    href: "/",
    category: "Fullstack",
    img: "/assets/work/thumb-1.png",
    title: "Project 1",
  },
  {
    href: "/",
    category: "Apps",
    img: "/assets/work/thumb-2.png",
    title: "Project 2",
  },
  {
    href: "/",
    category: "Fullstack",
    img: "/assets/work/thumb-3.png",
    title: "Project 3",
  },
  {
    href: "/",
    category: "Frontend",
    img: "/assets/work/thumb-4.png",
    title: "Project 4",
  },
];

const Work = () => {
  // extract unique categories from the data
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  // create tab data with "all" category and unique categories from data
  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  // state to manage the currently selected tab
  const [tabValue, setTabValue] = useState("all");
  // number of items to show intially
  const [visibleItems, setVisibleItems] = useState(6);

  // filter work items based on the selected tab
  const filterWork =
    tabValue === "all"
      ? data.filter((item) => item.category !== "all")
      : data.filter((item) => item.category === tabValue);

  //handle loading more items
  const loadMoreItems = () => {
    // adjust the number to control how many items are loaded at a time
    setVisibleItems((prev) => prev + 2);
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
            {/* render tab triggers */}
            <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
              {tabData.map((item, index) => {
                return (
                  <TabsTrigger
                    value={item.category}
                    key={index}
                    className="capitalize w-[120px] flex items-center justify-center"
                    onClick={() => setTabValue(item.category)}
                  >
                    {item.category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          {/* render content for the selected tab */}
          <TabsContent value={tabValue} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <AnimatePresence>
                {filterWork.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* load more button */}
            {visibleItems < filterWork.length && (
              <div className="flex justify-center mt-12">
                <button onClick={loadMoreItems} className="btn btn-accent">
                  Load more
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;