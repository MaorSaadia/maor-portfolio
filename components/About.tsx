import Image from "next/image";
import { motion } from "framer-motion";

import AnimatedText from "./AnimatedText";

const About = () => {
  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          {/* image + shapes */}
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              {/* shape */}
              <div className="w-[160px] h-[160px] bg-rose-800 dark:bg-rose-400 absolute -left-5 -top-5 -z-10"></div>
              {/* image */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[480px] flex items-end justify-center">
                <Image
                  src="/assets/about/profile-img.png"
                  width={1365}
                  height={2048}
                  quality={100}
                  priority
                  alt=""
                />
              </div>
              {/* rotating shape */}
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
                <div className="absolute text-center text-white">
                  <div className="text-5xl font-bold leading-none">3+</div>
                  <div className="leading-none text-center">
                    Years of <br /> Experience
                  </div>
                </div>
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

{
  /* text */
}
<div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6">
  <div>
    <AnimatedText text="My Name is Maor" textStyles="h2 mb-2" />
    <p className="text-lg">FullStack & App Developer</p>
  </div>
</div>;
<p className="max-w-[680px] mx-auto xl:mx-0 mb-2">I create ...</p>;
