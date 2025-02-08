import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
// import { useTheme } from './ThemeContext';


export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  // const { theme, toggleTheme} = useTheme();
  

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
      <>
        <button onClick={scrollToTop} className={`cursor-pointer fixed bottom-5 right-5 p-3 rounded bg-black dark:bg-white dark:text-black text-white shadow-lg transition-opacity duration-300 ${   isVisible ? "opacity-100" : "opacity-0" }`}>
          <FaArrowUp size={26} />
        </button>
      </>
  );
};