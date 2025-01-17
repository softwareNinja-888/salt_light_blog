import closeLight from '/light/closeLight.png'
import closeDark from '/dark/closeDark.webp'

import instaLight from '/light/instaLight.png'
import xLight from '/light/xLight.png'
import facebookLight from '/light/facebookLight.png'
import tiktokLight from '/light/tiktokLight.png'

import instaDark from '/dark/instaDark.png'
import xDark from '/dark/xDark.png'
import facebookDark from '/dark/facebookDark.png'
import tiktokDark from '/dark/tiktokDark.png'

import React from "react";
import { motion } from "framer-motion";
import { useAuth } from "./AuthContext"
import { useTheme } from './ThemeContext';

// import { useNavigate } from "react-router-dom"

export function HamburgerMenu({ menuOpen, setMenuOpen }){

  // AUTH CONTEXT

  // const {IsLoggedIn, login, logout,ActiveUser} = useAuth()
  const {user, login, logout} = useAuth()
  const {theme} = useTheme()

  function handleImg(){
    return theme === 'light' ? xLight : xDark;
  }

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
    navigate(path)
    setMenuOpen()
  }
   

  return (
    <>
      {/* Background Overlay */}
      <motion.div
        className="fixed inset-0 bg-white dark:bg-theme bg-opacity-100 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={setMenuOpen} // Close menu when clicking outside
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      />

      {/* Animated Menu */}
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary"
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {/* CLOSE BTN */}
        <img src={theme === 'light' ? closeLight : closeDark } onClick={() => setMenuOpen(false)} className="absolute top-10 right-10 text-2xl w-5" />

        {/* Links */}
        <nav className="flex flex-col space-y-4 text-lg text-fontColor font-poppins items-center">
          <div onClick={()=>{handleNavigation("/pages/blog")}} className="dark:text-white hover:underline">Blogs</div>
          <div onClick={()=>{handleNavigation("/pages/events")}}className="dark:text-white hover:underline">Events</div>
          <div onClick={()=>{handleNavigation("/pages/donate")}} className="dark:text-white hover:underline">Donate</div>
          <div onClick={()=>{handleNavigation("/aboutus")}} className="dark:text-white hover:underline">About Us</div>
          <div onClick={()=>{handleNavigation("/pages/churches")}} className="dark:text-white hover:underline">Churches</div>
          <div onClick={()=>{handleNavigation("/signup")}} className='dark:text-white'>Login/SignUp</div>
{/*            {IsLoggedIn ? <div onClick={()=>{handleNavigation(`profile/${ActiveUser}`)}}>Profile</div>:
                          <>
                            <div onClick={()=>{handleNavigation("/signup")}}>Login/SignUp</div>
                          </>
            }  */}
        </nav>
        <div className="flex space-x-4 mt-16 gap-5">
          <a href="#" className="w-8">
            <img src={ theme === 'light' ? facebookLight : facebookDark } alt="facebook logo" className="" /> 
          </a>
          <a href="#" className="w-8">
            <img src={ theme === 'light' ? xLight : xDark} alt="x logo" className="w-20" />           
          </a>
          <a href="#" className="w-8">
            <img src={theme === 'light' ? instaLight : instaDark} alt="insta logo" className="" />           
          </a>
          <a href="#" className="w-8">
            <img src={theme === 'light' ? tiktokLight : tiktokDark} alt="insta logo" className="" />           
          </a>
        </div>
      </motion.div>
    </>
  );
};
