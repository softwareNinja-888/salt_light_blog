import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function Search() {

  const [searchTerm,setSearchTerm] = useState('')

  // function handleSubmit(e) {
    
  // }

  return (
    <form
      className="relative w-full flex flex-col justify-center items-center gap-4 " // Pass the function directly
    >
      {/* Input Field */}
      <input
        type="search"
        placeholder="Search..."
        id="searchInput"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className= "dark:bg-white text-black w-11/12 px-4 py-2 pr-10 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />

      {/* Animated Clear Button */}
      <motion.div
        className="absolute inset-y-0 flex items-center right-6"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          type="button" // Change type to 'button' to avoid triggering submit
          onClick={() => setSearchTerm('')} // Clear the state instead of manipulating the DOM
          className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </motion.div>

    </form>
  );
}
