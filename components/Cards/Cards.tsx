"use client";

import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Card from "./Card";

const journey = [
  // experience
  {
    type: "experience",
    company: "company",
    logoUrl: "/assets/journey/experience/logo-1.svg",
    position: "position",
    duration: "duration",
    description: "description",
  },
  {
    type: "experience",
    company: "company",
    logoUrl: "/assets/journey/experience/logo-2.svg",
    position: "position",
    duration: "duration",
    description: "description",
  },

  // education
  {
    type: "education",
    institution: "SCE",
    logoUrl: "/assets/journey/education/logo-1.svg",
    qualification: "qualification",
    duration: "duration",
    description: "description",
  },
  {
    type: "education",
    institution: "Udemy",
    logoUrl: "/assets/journey/education/logo-2.svg",
    qualification: "qualification",
    duration: "duration",
    description: "description",
  },
  {
    type: "education",
    institution: "Udemy",
    logoUrl: "/assets/journey/education/logo-2.svg",
    qualification: "qualification",
    duration: "duration",
    description: "description",
  },

  // skills
  {
    type: "skill",
    name: "HTML",
    icon: <FaHtml5 />,
    duration: "duration",
    description: "description",
  },
  {
    type: "skill",
    name: "CSS",
    icon: <FaCss3Alt />,
    duration: "duration",
    description: "description",
  },
  {
    type: "skill",
    name: "Javascript",
    icon: <FaJs />,
    duration: "duration",
    description: "description",
  },
  {
    type: "skill",
    name: "React",
    icon: <FaReact />,
    duration: "duration",
    description: "description",
  },
];

const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "experience")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "education")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "skill")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;