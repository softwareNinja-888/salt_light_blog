import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function Search() {

  const [searchTerm,setSearchTerm] = useState('')

  // function handleSubmit(e) {
    
  // }

  return (
    // <form
    //   className="relative w-full flex flex-col justify-center items-center gap-4 " // Pass the function directly
    // >
    //   {/* Input Field */}
    //   <input
    //     type="search"
    //     placeholder="Search..."
    //     id="searchInput"
    //     value={searchTerm}
    //     onChange={(e) => setSearchTerm(e.target.value)}
    //     className= "dark:bg-white text-black w-full px-4 py-2 pr-10 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
    //   />

    //   {/* Animated Clear Button */}
    //   <motion.div
    //     className="absolute inset-y-0 flex items-center right-6"
    //     whileHover={{ scale: 1.2, rotate: 90 }}
    //     whileTap={{ scale: 0.9 }}
    //   >
    //     <button
    //       type="button" // Change type to 'button' to avoid triggering submit
    //       onClick={() => setSearchTerm('')} // Clear the state instead of manipulating the DOM
    //       className="focus:outline-none"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-5 w-5"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M6 18L18 6M6 6l12 12"
    //         />
    //       </svg>
    //     </button>
    //   </motion.div>

    // </form>

    <form action="#" method="POST" className="relative sm:mt-12">
      <div className="relative">
          <div className="absolute  -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                  <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
              </div>
              <input type="email" name="" id="" placeholder="Search by Keyword or Topic..." className="block w-full py-4 pr-6 text-white placeholder-gray-500 dark:bg-black bg-white border border-transparent  pl-14 sm:py-5 focus:border-transparent focus:ring-0  " />
          </div>
      </div>
      <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-0 sm:mt-0 translate-x-1">
          <button type="submit" className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest dark:text-white text-black uppercase transition-all duration-200 bg-gradient-to-r from-cyan-500 to-purple-500 sm:w-auto sm:py-3 hover:opacity-90 ">Search</button>
      </div>
    </form>
  );
}
