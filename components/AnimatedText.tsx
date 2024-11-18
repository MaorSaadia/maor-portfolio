"use client";

import { motion, Variants } from "framer-motion";

const letterAnimation: Variants = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  animate: (i: number[]) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.2, 0, 0.1, 1],
      delay: i[0],
    },
  }),
};

const getLetter = ({ name }: { name: string }) => {
  const words = name.split(" ");
  const letters: React.ReactNode[] = [];

  words.forEach((word, wordIndex) => {
    const wordLetters: React.ReactNode[] = [];
    word.split("").forEach((letter, letterIndex) => {
      wordLetters.push(
        <motion.span
          key={`${wordIndex}-${letterIndex}`}
          variants={letterAnimation}
          initial="initial"
          whileInView="animate"
          custom={[letterIndex * 0.02, (word.length - letterIndex) * 0.01]}
        >
          {letter}
        </motion.span>
      );
    });

    letters.push(
      <div key={wordIndex} className={`flex ${wordIndex > 0 ? "ml-2" : ""}`}>
        {wordLetters}
      </div>
    );
  });

  return letters;
};

interface AnimatedTextProps {
  text?: string;
  textStyles?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, textStyles }) => {
  return (
    <div className={`${textStyles} flex justify-center items-center`}>
      {getLetter({ name: text ?? "" })}
    </div>
  );
};

export default AnimatedText;
