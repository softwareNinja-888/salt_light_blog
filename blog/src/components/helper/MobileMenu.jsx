import closeLight from '/closeLight.avif'
import close from '/closeDark.avif'

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router'

export function MobileMenu({ menuOpen, setMenuOpen }){

  const navigate = useNavigate()

  // function handleImg(){
  //   return theme === 'light' ? xLight : xDark;
  // }

  // Animation variants for menu
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // const navigate = useNavigate()

  function handleNavigation(path){
    // navigate(path)
    setMenuOpen()
  }
   

  return (
    <>
      {/* Background Overlay */}
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-100 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={setMenuOpen} // Close menu when clicking outside
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      />

      {/* Animated Menu */}
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {/* CLOSE BTN */}
        <img src={close} onClick={() => setMenuOpen(false)} className="absolute top-10 right-10 text-2xl w-5" />

        {/* Links */}
        <nav className="flex flex-col space-y-4 text-lg font-poppins items-center">
          <div onClick={()=>{handleNavigation("/")}} className="text-white hover:underline">Home</div>
          <div onClick={()=>{handleNavigation("/blogs")}}className="text-white hover:underline">Blogs</div>
          {/* <div onClick={()=>{handleNavigation("/aboutus")}} className="text-white hover:underline">About Us</div> */}
          <div onClick={()=>{handleNavigation("/signup")}} className='text-white'>Login/SignUp</div>
{/*            {IsLoggedIn ? <div onClick={()=>{handleNavigation(`profile/${ActiveUser}`)}}>Profile</div>:
                          <>
                            <div onClick={()=>{handleNavigation("/signup")}}>Login/SignUp</div>
                          </>
            }  */}
        </nav>
   
        </motion.div>
    </>
  );
};
