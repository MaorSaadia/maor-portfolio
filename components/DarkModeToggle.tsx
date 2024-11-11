"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", (!isDarkMode).toString());
    document.body.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="text-black dark:text-white flex items-center gap-2"
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
  );
};

export default DarkModeToggle;
