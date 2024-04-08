import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      {darkMode ? (
        <button
          onClick={toggleTheme}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 font-medium p-2 w-8 h-8 text-center rounded-full"
        >
          <IoMdSunny />
        </button>
      ) : (
        <button
          onClick={toggleTheme}
          type="button"
          className="text-blue-700 bg-white hover:bg-gray-300 focus:ring-1 font-medium p-2 w-8 h-8 text-center rounded-full"
        >
          <FaMoon />
        </button>
      )}
    </>
  );
};

export default ThemeSwitcher;
