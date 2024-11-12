import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";
import { FiMapPin, FiPhoneCall, FiMail, FiX } from "react-icons/fi";
import { Moon, Sun } from "lucide-react";

import Nav from "./Nav";
import Socials from "./Socials";

const FixedMenu = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });

  const isShortScreen = useMediaQuery({
    query: "(max-height: 800px)",
  });

  useEffect(() => {
    setIsMounted(true);
    // Check if the user has a preference saved in localStorage
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    }
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", (!isDarkMode).toString());
    document.body.classList.toggle("dark");
  };

  return (
    <div className="fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent">
      <AnimatePresence>
        {showMenu && showMenuButton && (
          <>
            {isMobile ? (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 pointer-events-auto"
                  onClick={closeMenu}
                />

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
                    <div className="flex justify-center gap-4">
                      <Socials
                        containerStyles="flex gap-2"
                        iconStyles="text-[20px] w-[32px] h-[32px] text-primary flex items-center justify-center rounded-full"
                      />
                      <button
                        onClick={toggleDarkMode}
                        className="flex items-center gap-2"
                      >
                        {isDarkMode ? (
                          <>
                            <Moon className="w-5 h-5" />
                          </>
                        ) : (
                          <>
                            <Sun className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            ) : (
              <motion.div
                className={`fixed w-full max-w-md md:max-w-none pointer-events-auto ${
                  isShortScreen
                    ? "bottom-0 md:bottom-4"
                    : "bottom-[10rem] md:bottom-[5.5rem] xl:bottom-[6rem]"
                }`}
              >
                <div
                  className={`bg-white w-full shadow-custom max-w-[1170px] mx-auto 
                  ${
                    isShortScreen
                      ? "py-6 px-6 xl:px-16"
                      : "py-12 xl:py-12 px-12 xl:px-32"
                  }
                  flex items-center justify-between rounded-lg`}
                >
                  <Nav
                    containerStyles="md:border-r border-secondary/20 md:pr-12 w-full md:w-auto text-center md:text-left"
                    listStyles="flex flex-col justify-center gap-4"
                    linkStyles={`font-primary cursor-pointer ${
                      isShortScreen ? "text-2xl" : "text-4xl"
                    }`}
                    spy={true}
                  />
                  <div className="flex items-center gap-12">
                    <div className="hidden md:flex">
                      <div>
                        <div
                          className={`flex gap-12 ${
                            isShortScreen ? "mb-6" : "mb-12"
                          }`}
                        >
                          <div className="flex flex-col">
                            <div
                              className={`${
                                isShortScreen ? "text-xl" : "text-[28px]"
                              } text-accent mb-2`}
                            >
                              <FiMapPin />
                            </div>
                            <p
                              className={`font-semibold text-primary ${
                                isShortScreen ? "text-base" : "text-lg"
                              }`}
                            >
                              Location
                            </p>
                            <p
                              className={
                                isShortScreen ? "text-sm" : "text-base"
                              }
                            >
                              Beer Sheva, Israel
                            </p>
                          </div>
                          <div className="flex flex-col">
                            <div
                              className={`${
                                isShortScreen ? "text-xl" : "text-[28px]"
                              } text-accent mb-2`}
                            >
                              <FiPhoneCall />
                            </div>
                            <p
                              className={`font-semibold text-primary ${
                                isShortScreen ? "text-base" : "text-lg"
                              }`}
                            >
                              Phone
                            </p>
                            <p
                              className={
                                isShortScreen ? "text-sm" : "text-base"
                              }
                            >
                              054-3446787
                            </p>
                          </div>
                          <div className="flex flex-col">
                            <div
                              className={`${
                                isShortScreen ? "text-xl" : "text-[28px]"
                              } text-accent mb-2`}
                            >
                              <FiMail />
                            </div>
                            <p
                              className={`font-semibold text-primary ${
                                isShortScreen ? "text-base" : "text-lg"
                              }`}
                            >
                              Email
                            </p>
                            <p
                              className={
                                isShortScreen ? "text-sm" : "text-base"
                              }
                            >
                              maorsa9@gmail.com
                            </p>
                          </div>
                        </div>
                        <Socials
                          containerStyles="flex gap-2"
                          iconStyles={`text-[20px] w-[32px] h-[32px] text-primary flex items-center justify-center rounded-full ${
                            isShortScreen ? "scale-90" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={toggleDarkMode}
                    className="flex items-center gap-2"
                  >
                    {isDarkMode ? (
                      <>
                        <Moon className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        <Sun className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>

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
