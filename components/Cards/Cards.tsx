"use client";

import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Card from "./Card";

const journey = [
  // experience
  // {
  //   type: "experience",
  //   company: "company",
  //   logoUrl: "/assets/journey/experience/logo-1.svg",
  //   position: "position",
  //   duration: "duration",
  //   description: "description",
  // },
  // {
  //   type: "experience",
  //   company: "company",
  //   logoUrl: "/assets/journey/experience/logo-2.svg",
  //   position: "position",
  //   duration: "duration",
  //   description: "description",
  // },

  // education
  {
    type: "education",
    institution: "SCE - Shamoon College of Engineering",
    logoUrl: "/assets/journey/education/sce-logo.png",
    qualification: "B.Sc Software Engineering",
    duration: "Sep 2020 - Oct 2024",
    description: "description",
  },
  {
    type: "education",
    institution: "Udemy",
    logoUrl: "/assets/journey/education/udemy.svg",
    qualification: "The Complete JavaScript Course",
    description:
      "This Udemy course covers the essential skills on JavaScript, teaching both fundamental concepts like variables, functions, and arrays, as well as advanced modern features like ES6, classes, and more.",
  },
  {
    type: "education",
    institution: "Udemy",
    logoUrl: "/assets/journey/education/udemy.svg",
    qualification: "MERN From Scratch | eCommerce Platform",
    description:
      "This Udemy course covers building an eCommerce platform with React, Redux, Express, and MongoDB, including authentication, shopping cart with payments, admin management, and more.",
  },
  {
    type: "education",
    institution: "Udemy",
    logoUrl: "/assets/journey/education/udemy.svg",
    qualification: "Node.js, Express, MongoDB Bootcamp",
    description:
      "This Udemy course comprehensively covers building a strong backend with Node.js, Express, MongoDB, and Mongoose, including RESTfulAPI, advanced authentication, server-side, and more.",
  },

  // skills
  {
    type: "skill",
    name: "HTML",
    icon: <FaHtml5 />,
    duration: "duration",
    // description: "description",
  },
  {
    type: "skill",
    name: "CSS",
    icon: <FaCss3Alt />,
    duration: "duration",
    // description: "description",
  },
  {
    type: "skill",
    name: "Javascript",
    icon: <FaJs />,
    duration: "duration",
    // description: "description",
  },
  {
    type: "skill",
    name: "React",
    icon: <FaReact />,
    duration: "duration",
    // description: "description",
  },
];

const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue="education"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-[30px] dark:text-white/80">
          {/* <TabsTrigger value="experience">Experience</TabsTrigger> */}
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
