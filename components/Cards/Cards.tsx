"use client";

import {
  FaBootstrap,
  FaCss3Alt,
  FaGit,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiFramer,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

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
  {
    type: "education",
    institution: "Udemy",
    logoUrl: "/assets/journey/education/udemy.svg",
    qualification: "The Ultimate React Course",
    description:
      "This Udemy course teaches modern React development from beginner to advanced, covering essential concepts like React Server Components, Next.js, state management with Redux and React Query, custom hooks, tailwindCSS, and more.",
  },
  {
    type: "education",
    institution: "Udemy",
    logoUrl: "/assets/journey/education/udemy.svg",
    qualification: "React Native Practical Guide",
    description:
      "This Udemy course teaches how to build native iOS and Android mobile apps using React Native, covering essential mobile features like Google Maps and device camera integration, allowing developers to create cross-platform applications.",
  },
  {
    type: "education",
    institution: "Udemy",
    logoUrl: "/assets/journey/education/udemy.svg",
    qualification: "The Complete React Native",
    description:
      "This Udemy course teaches building native mobile apps with React Native, covering Hooks, Context, Redux, and React Navigation, guiding through creating reusable components and deploying applications to both Apple and Google Play stores.",
  },
  {
    type: "education",
    institution: "Udemy",
    logoUrl: "/assets/journey/education/udemy.svg",
    qualification: "Mastering TypeScript",
    description:
      "This Udemy course provides a comprehensive guide to TypeScript, covering its core syntax, advanced features like Interfaces and Generics, and integration with React and Webpack for modern web development.",
  },

  // skills
  {
    type: "skill",
    name: "C",
    icon: <SiC />,
    duration: "2020",
    level: "Beginner",
    description:
      "A powerful low-level programming language used for system programming and building efficient applications.",
  },
  {
    type: "skill",
    name: "C++",
    icon: <SiCplusplus />,
    duration: "2020",
    level: "Beginner",
    description:
      "An extension of C that adds object-oriented features, used in game development and high-performance applications.",
  },
  {
    type: "skill",
    name: "HTML",
    icon: <FaHtml5 />,
    level: "Advanced",
    duration: "2021",
    description:
      "The standard markup language for creating web pages and structuring web content.",
  },
  {
    type: "skill",
    name: "CSS",
    icon: <FaCss3Alt />,
    level: "Intermediate",
    duration: "2021",
    description:
      "A styling language used to design and customize the visual presentation of HTML documents.",
  },
  {
    type: "skill",
    name: "Javascript",
    icon: <FaJs />,
    duration: "2021",
    level: "Advanced",
    description:
      "A versatile programming language that enables interactive and dynamic web functionality.",
  },
  {
    type: "skill",
    name: "Bootstrap",
    icon: <FaBootstrap />,
    duration: "2021",
    level: "Beginner",
    description:
      "A popular CSS framework for building responsive and mobile-first websites quickly.",
  },
  {
    type: "skill",
    name: "Python",
    icon: <FaPython />,
    duration: "2021",
    level: "Beginner",
    description:
      "A high-level programming language known for its simplicity and extensive library ecosystem.",
  },
  {
    type: "skill",
    name: "Git",
    icon: <FaGit />,
    duration: "2022",
    level: "Advanced",
    description:
      "A distributed version control system for tracking changes and collaborating on code.",
  },
  {
    type: "skill",
    name: "React",
    icon: <FaReact />,
    duration: "2022",
    level: "Advanced",
    description:
      "A JavaScript library for building user interfaces with reusable components and efficient DOM manipulation.",
  },
  {
    type: "skill",
    name: "NodeJs",
    icon: <FaNodeJs />,
    duration: "2022",
    level: "Advanced",
    description:
      "A runtime environment that allows executing JavaScript code outside the browser, primarily for backend development.",
  },
  {
    type: "skill",
    name: "Express",
    icon: <SiExpress />,
    duration: "2022",
    level: "Advanced",
    description:
      "A minimal and flexible Node.js web application framework for building robust APIs and web applications.",
  },
  {
    type: "skill",
    name: "Mongodb",
    icon: <SiMongodb />,
    level: "Intermediate",
    duration: "2022",
    description:
      "A NoSQL database that provides high scalability and flexibility with JSON-like document storage.",
  },
  {
    type: "skill",
    name: "SQL",
    icon: <SiMysql />,
    level: "Beginner",
    duration: "2023",
    description:
      "A standard language for managing and manipulating relational databases.",
  },
  {
    type: "skill",
    name: "React Native",
    icon: <SiReact />,
    duration: "2023",
    level: "Advanced",
    description:
      "A framework for building native mobile applications using React and JavaScript.",
  },
  {
    type: "skill",
    name: "React Query",
    icon: <SiReactquery />,
    duration: "2023",
    level: "Intermediate",
    description:
      "A powerful data-fetching and state management library for React applications.",
  },
  {
    type: "skill",
    name: "NextJS",
    icon: <SiNextdotjs />,
    duration: "2024",
    level: "Advanced",
    description:
      "A React framework that enables server-side rendering and static site generation for optimal performance.",
  },
  {
    type: "skill",
    name: "Tailwindcss",
    icon: <SiTailwindcss />,
    duration: "2024",
    level: "Intermediate",
    description:
      "A utility-first CSS framework that enables rapid UI development through composable classes and modern design principles.",
  },
  {
    type: "skill",
    name: "Prisma",
    icon: <SiPrisma />,
    duration: "2024",
    level: "Intermediate",
    description:
      "A modern database ORM that simplifies database operations with type-safe queries.",
  },
  {
    type: "skill",
    name: "Postgresql",
    icon: <SiPostgresql />,
    duration: "2024",
    level: "Beginner",
    description:
      "A powerful, open-source relational database system with advanced features and reliability.",
  },
  {
    type: "skill",
    name: "TypeScript",
    icon: <SiTypescript />,
    duration: "2024",
    level: "Intermediate",
    description:
      "A typed superset of JavaScript that adds static types for enhanced code quality and developer experience.",
  },
  {
    type: "skill",
    name: "Framer-Motion",
    icon: <SiFramer />,
    duration: "2024",
    level: "Beginner",
    description:
      "A production-ready motion library for React that powers animations and interactive UI elements.",
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
