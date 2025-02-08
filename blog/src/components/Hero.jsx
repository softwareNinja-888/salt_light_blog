import { Search } from "./Search";
import { Line } from "./Line";
import { motion } from "framer-motion";
import heroImage from "/hero.avif"; // Make sure to place a relevant image in your assets folder

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-center gap-16 w-screen py-20 px-6 md:px-16"
      >
        {/* Text Content */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:items-start justify-center text-center md:text-left w-full md:w-1/2"
        >
          <div className="text-3xl md:text-5xl font-poppins dark:text-white">Leap of Faith</div>
          <div className="text-lg md:text-xl font-mono mt-2 text-black dark:text-white">
						Trusting God is a lifelong journey. Don’t travel alone. Walk with faith, seek wisdom, and find strength in His word every day.
          </div>
          <motion.div variants={itemVariants} className="mt-16 w-full max-w-md ">
            <Search />
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          variants={imageVariants}
          className="w-full md:w-1/2 flex justify-center hidden md:block "
        >
          <img
            src={heroImage}
            alt="Faith Illustration"
            className="max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>
      <Line />
    </>
  );
}
