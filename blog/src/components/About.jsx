import { Line } from './Line'
import logo from '/light/logo.webp'

import { useInView,motion } from 'framer-motion';
import { useRef } from 'react';
export function About(){

    const ref = useRef(null)
    const isInView = useInView(ref,{ once : true, margin : '100px'})

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,   
            staggerChildren: 0.5, 
          },
        },
		
      };
      
    const itemVariants = {
      hidden: { x: "-100%", opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeIn" } },
    };
    return(
        <>
            <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : "hidden"}  className="flex flex-col w-10/12 justify-center m-auto mt-10 dark:text-white gap-10">
                <motion.div variants={itemVariants} className="font-mono text-3xl underline">About Us</motion.div>
                <motion.div variants={itemVariants} className="">
                    <img src={logo} alt="" className="" />
                </motion.div>
                <motion.div variants={itemVariants} className="font-mono text-md">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe asperiores vero deserunt numquam minus, ea quod error commodi nulla laboriosam ipsum sunt dicta enim quo quaerat officia fugiat debitis deleniti.
                </motion.div>
            </motion.div>
            <div className="my-20">
                <Line/>
            </div>
        </>
    )
}