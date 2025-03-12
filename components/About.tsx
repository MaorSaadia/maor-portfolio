import Image from "next/image";
import { motion } from "framer-motion";

import AnimatedText from "./AnimatedText";

const About = () => {
  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation for the arrow
  const arrowLineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  // Animation for the arrow head
  const arrowHeadVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 1.7,
      },
    },
  };

  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          {/* decorative element replacing the image */}
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              {/* shape */}
              <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
              {/* decorative element instead of image */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[480px] flex flex-col items-center justify-center relative">
                <motion.div
                  className="text-4xl font-bold text-primary/70 dark:text-white/70 text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.3,
                      },
                    },
                  }}
                >
                  <motion.span
                    className="block animate-pulse dark:text-black/60"
                    variants={textVariants}
                  >
                    Software
                  </motion.span>
                  <motion.span
                    className="block animate-[pulse_2s_ease-in-out_0.8s_infinite] dark:text-black/60"
                    variants={textVariants}
                  >
                    Engineer
                  </motion.span>

                  {/* Connecting word "with" that appears after animation */}
                  <motion.span
                    className="block mt-6 text-2xl text-primary/60 dark:text-black/60 animate-pulse"
                    variants={textVariants}
                    transition={{ delay: 0.6 }}
                  >
                    with
                  </motion.span>

                  {/* Animated arrow container */}
                  <div className="relative h-8 mt-2 w-full px-8">
                    {/* Animated arrow line */}
                    <motion.div
                      className="h-[2px] bg-primary/40 dark:bg-black/40 mx-auto"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={arrowLineVariants}
                    />

                    {/* Animated arrow head */}
                    <motion.div
                      className="absolute right-5 -mt-[7px]"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={arrowHeadVariants}
                    >
                      <div
                        className="w-0 h-0 
                        border-t-[6px] border-t-transparent 
                        border-l-[12px] border-l-primary/40 dark:border-l-black/40
                        border-b-[6px] border-b-transparent"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              {/* rotating shape - kept for visual interest */}
              <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src="/assets/about/shape-1.svg"
                    width={160}
                    height={160}
                    alt=""
                  />
                </motion.div>
                <motion.div
                  className="absolute text-center text-white"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 1.2,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl font-bold leading-none">3+</div>
                  <div className="leading-none text-center">
                    Years of <br /> Experience
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* text */}
          <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6">
            <div>
              <AnimatedText text="My Name is Maor" textStyles="h2 mb-2" />
              <p className="text-lg dark:text-white/90">Web & App Developer</p>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-2 dark:text-white">
              As a Software Engineer with a bachelor&apos;s degree in Software
              Engineering, I specialize in creating sophisticated web
              applications and mobile solutions. My expertise lies in modern
              JavaScript frameworks and full-stack development, with a
              particular focus on the MERN stack (MongoDB, Express.js, React,
              Node.js), React Native, Next.js, and TypeScript. I craft
              high-performance digital experiences with an emphasis on:
              Responsive and intuitive user interfaces Seamless user experiences
              across platforms Meticulous attention to detail Performance
              optimization and best practices My current focus is on developing
              comprehensive E-commerce solutions, I maintain a solution-oriented
              mindset and embrace continuous learning to stay at the forefront
              of web development technologies. My commitment to professional
              growth ensures that I can consistently deliver cutting-edge
              solutions that meet modern business needs.
            </p>
            {/* info items */}
            <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center">
              {/* item 1 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary dark:text-white">
                  Age
                </div>
                <p className="dark:text-white/90">26 Years</p>
              </div>
              {/* item 2 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary dark:text-white">
                  Born in
                </div>
                <p className="dark:text-white/90">Beer Sheva, Israel</p>
              </div>
              {/* item 3 */}
              {/* <div className="max-w-max">
                <div className="uppercase font-bold text-primary dark:text-white">
                  Phone
                </div>
                <p className="dark:text-white/90 dark:text-white">
                  054-3446787
                </p>
              </div> */}
              {/* item 4 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary dark:text-white">
                  Email
                </div>
                <p className="dark:text-white/90">maorsa9@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
