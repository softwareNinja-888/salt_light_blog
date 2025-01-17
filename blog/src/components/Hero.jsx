import {Search} from './Search'
import { Line } from './Line'

import { motion } from "framer-motion";
export function Hero(){

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
      hidden: { x: "100%", opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

	return (
		<>
			<motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center justify-center gap-3 w-screen py-20">
				<motion.div variants={itemVariants} className="flex items-center justify-center text-4xl font-poppins flex-wrap text-center mb-4 dark:text-white gap-5">
					<div className="text-3xl text-center font-lora">Leap of Faith</div>
					<div className="text-lg text-center font-mono">Trusting God is a lifelong journey. Dont travel alone</div>
				</motion.div>
				<motion.div variants={itemVariants} className="">
					<Search/>
				</motion.div>
			</motion.div>
			<Line/>
		</>

	)
}