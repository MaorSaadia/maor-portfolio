import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";
import { FiMapPin, FiPhoneCall, FiMail, FiX } from "react-icons/fi";

import Nav from "./Nav";
import Socials from "./Socials";

const FixedMenu = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width:640px)",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (!isMobile) {
        const handleScroll = () => {
          setShowMenuButton(window.scrollY > 150);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      } else {
        setShowMenuButton(true);
      }
    }
  }, [isMobile, isMounted]);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent">
      {/* menu content */}
      <AnimatePresence>
        {showMenu && showMenuButton && (
          <>
            {/* Mobile Layout */}
            {isMobile ? (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 pointer-events-auto"
                  onClick={closeMenu}
                />

                {/* Mobile Menu */}
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 25 }}
                  className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-custom pointer-events-auto max-h-[85vh] overflow-y-auto"
                >
                  <button
                    onClick={closeMenu}
                    className="absolute right-4 top-4 p-2 text-primary"
                  >
                    <FiX className="text-2xl" />
                  </button>

                  <div className="p-6 space-y-6">
                    <Nav
                      containerStyles="w-full text-center border-b border-secondary/20 pb-6"
                      listStyles="flex flex-col justify-center gap-4"
                      linkStyles="font-primary text-2xl cursor-pointer"
                      spy={true}
                    />
                    <Socials
                      containerStyles="flex justify-center gap-4"
                      iconStyles="text-[20px] w-[32px] h-[32px] text-primary flex items-center justify-center rounded-full"
                    />
                  </div>
                </motion.div>
              </>
            ) : (
              // Desktop Layout (Original)
              <motion.div className="relative w-full max-w-md md:max-w-none h-[320px] bottom-[25rem] md:bottom-[19rem] xl:bottom-[18rem] px-4 pointer-events-auto">
                <div className="bg-white w-full h-full shadow-custom max-w-[1170px] mx-auto py-12 xl:py-12 px-12 xl:px-32 flex items-center gap-12 rounded-lg">
                  <Nav
                    containerStyles="md:border-r border-secondary/20 md:pr-12 w-full md:w-auto text-center md:text-left"
                    listStyles="flex flex-col justify-center gap-4"
                    linkStyles="font-primary text-4xl cursor-pointer"
                    spy={true}
                  />
                  {/* info */}
                  <div className="hidden md:flex mx-auto">
                    <div>
                      <div className="flex gap-12 mb-12">
                        <div className="flex flex-col">
                          <div className="text-[28px] text-accent mb-2">
                            <FiMapPin />
                          </div>
                          <p className="font-semibold text-primary text-lg">
                            Location
                          </p>
                          <p>Beer Sheva, Israel</p>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[28px] text-accent mb-2">
                            <FiPhoneCall />
                          </div>
                          <p className="font-semibold text-primary text-lg">
                            Phone
                          </p>
                          <p>054-3446787</p>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[28px] text-accent mb-2">
                            <FiMail />
                          </div>
                          <p className="font-semibold text-primary text-lg">
                            Email
                          </p>
                          <p>maorsa9@gmail.com</p>
                        </div>
                      </div>
                      <Socials
                        containerStyles="flex gap-2"
                        iconStyles="text-[20px] w-[32px] h-[32px] text-primary flex items-center justify-center rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>

      {/* Menu button */}
      {isMobile ? (
        <AnimatePresence>
          {!showMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed z-50 bottom-16 pointer-events-auto"
            >
              <button
                onClick={() => setShowMenu(true)}
                className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none"
              >
                <CgMenuGridR className="text-4xl text-white" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          {showMenuButton && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
              }}
              className="fixed z-50 bottom-16 pointer-events-auto"
            >
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none"
              >
                <CgMenuGridR className="text-4xl text-white" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default FixedMenu;
