
import { motion } from "framer-motion";
import modeLight from "/light/modeLight.png"; 
import modeDark from "/dark/modeDark.png"; 

import { useTheme } from './ThemeContext';



export function ThemeToggle() {

const { theme, toggleTheme} = useTheme();


  return (
    <motion.button
      onClick={toggleTheme}
      className="w-12 h-12 flex items-center justify-center rounded "
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.img
        key={theme}
        src={theme === "light" ? modeLight : modeDark}
        alt="Theme Icon"
        className="w-8 h-8"
        initial={{ rotate: 180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};
