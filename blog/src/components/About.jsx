// import { Line } from './Line'
// import logo from '/light/logo.avif'

// import { useInView,motion } from 'framer-motion';
// import { useRef } from 'react';
// export function About(){

//     const ref = useRef(null)
//     const isInView = useInView(ref,{ once : true, margin : '100px'})

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//           opacity: 1,
//           transition: {
//             delayChildren: 0.3,   
//             staggerChildren: 0.5, 
//           },
//         },
		
//       };
      
//     const itemVariants = {
//       hidden: { x: "-100%", opacity: 0 },
//       visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeIn" } },
//     };
//     return(
//         <>
//             <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : "hidden"}  className="flex flex-col w-10/12 justify-center m-auto mt-10 dark:text-white gap-10">
//                 <motion.div id="about" variants={itemVariants} className="font-mont text-3xl underline">About Us</motion.div>
//                 <motion.div variants={itemVariants} className="">
//                     <img src={logo} alt="" className="" />
//                 </motion.div>
//                 <motion.div variants={itemVariants} className="font-mont text-md text-center">
//                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe asperiores vero deserunt numquam minus, ea quod error commodi nulla laboriosam ipsum sunt dicta enim quo quaerat officia fugiat debitis deleniti.
//                 </motion.div>
//             </motion.div>
//             <div className="my-20">
//                 <Line/>
//             </div>
//         </>
//     )
// }


import { Line } from './helper/Line'
import logo from '/light/logo.avif'
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

import {HeadShot} from './helper/HeadShot'

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '100px' });

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

    return (
        <>
            <motion.div 
                ref={ref} 
                variants={containerVariants} 
                initial="hidden" 
                animate={isInView ? 'visible' : "hidden"}  
                className="flex flex-col w-11/12 sm:w-10/12 justify-center m-auto mt-10 dark:text-white gap-6 sm:gap-10"
            >
                <motion.div id="about" variants={itemVariants} className="font-mont text-2xl sm:text-3xl md:text-4xl underline text-center sm:text-left">
                    About Us
                </motion.div>
                <div className='flex flex-col lg:flex-row gap-10'>
                    <div className="lg:w-[80%]">
                        <HeadShot img={logo} link="https://github.com/softwareNinja-888" borderColor="border-blue-500" />
                    </div>
                    <motion.div variants={itemVariants} className="flex lg:justify-center lg:items-center font-mont text-sm sm:text-md md:text-lg text-center lg:text-start leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe asperiores vero deserunt numquam minus, ea quod error commodi nulla laboriosam ipsum sunt dicta enim quo quaerat officia fugiat debitis deleniti.
                    </motion.div>
                </div>
            </motion.div>
            <div className="my-10 sm:my-20">
                <Line />
            </div>
        </>
    );
}
