import { Search } from "./helper/Search";
import { Line } from "./helper/Line";
import { motion } from "framer-motion";
import heroImage from "/hero.avif"; // Make sure to place a relevant image in your assets folder
import { HeroImg } from "./HeroImg";

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
          className="flex flex-col items-center md:items-start justify-center text-center md:text-left w-full lg:w-1/2 md:gap-3 gap-8"
        >
          <div className="text-3xl md:text-5xl font-poppins text-black">Daily Bread Blog&#39;s</div>
          <div className="text-lg md:text-xl font-mono mt-2 text-black">
						Welcome to a Salt&Light blogs where your knowledge and faith grow deep. Explore God&#39;s  word, share the journey, and be encouraged as you follow Jesus each and everyday.
          </div>
          <motion.div variants={itemVariants} className="mt-0 w-full max-w-md ">
            <Search />
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          variants={imageVariants}
          className="w-full md:w-1/2 justify-center hidden lg:flex"
        >
          <img className="max-w-sm md:max-w-md lg:w-full h-full" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png" alt="" />
        </motion.div>
      </motion.div>
      <Line />
    </>
  );
}
