"use client";

import { motion } from "framer-motion";

interface RotatingShapeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  direction: string;
  duration: number;
}

const RotatingShape: React.FC<RotatingShapeProps> = ({
  content,
  direction,
  duration,
}) => {
  // define the rotation animation
  const rotationAnimation = {
    animate: {
      // rotate 360 degrees based on the direction
      rotate: direction === "right" ? 360 : direction === "left" ? -360 : 0,
      transition: {
        duration: duration, // duration of one full rotation
        ease: "linear", // smooth rotation
        repeat: Infinity, // repeat infinity
      },
    },
  };

  return (
    <motion.div variants={rotationAnimation} animate="animate">
      {content}
    </motion.div>
  );
};

export default RotatingShape;
