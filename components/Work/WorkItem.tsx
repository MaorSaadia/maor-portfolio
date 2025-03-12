import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowDownRight, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import { Badge } from "../ui/badge";

interface WorkItemProps {
  href?: string;
  category?: string;
  img: string;
  title?: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ href, category, img, title }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDialogOpen(true);
    // Prevent body scrolling when dialog is open
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    // Restore body scrolling when dialog is closed
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="group">
        <div
          className="w-full h-[300px] p-8 rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden bg-[#f4f4f4] cursor-pointer"
          onClick={openDialog}
        >
          <Badge className="bg-primary text-base z-40 absolute top-6 left-6 capitalize">
            {category}
          </Badge>
          <Image
            src={img}
            fill
            priority
            quality={100}
            alt={title || "Project image"}
            className="object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-lg"
            >
              View Larger
            </motion.div>
          </div>
        </div>
        <Link
          href={href ?? "/"}
          target="_blank"
          className="flex items-center justify-center"
        >
          <div className="flex-1">
            <h3 className="h3 dark:text-white">{title}</h3>
          </div>
          {href && (
            <button className="bg-accent text-white rounded-full w-[48px] h-[48px] flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500">
              <FiArrowDownRight className="text-2xl" />
            </button>
          )}
        </Link>
      </div>

      {/* Image Dialog */}
      <AnimatePresence>
        {isDialogOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            onClick={closeDialog}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-lg bg-white dark:bg-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeDialog}
                className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <FiX size={24} />
              </button>

              <div className="relative w-full h-[80vh]">
                <Image
                  src={img}
                  alt={title || "Project image"}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h2 className="text-xl font-bold text-white">{title}</h2>
                {category && (
                  <Badge className="mt-2 bg-primary">{category}</Badge>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WorkItem;
