import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function Search() {

  const [searchTerm,setSearchTerm] = useState('')

  // function handleSubmit(e) {
    
  // }

  return (
    <>
      <form action="#" method="post" className="relative mt-4">
        <div className="absolute transitiona-all duration-1000 opacity-30 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
          <div className="relative space-y-4 sm:flex sm:space-y-0 sm:items-end">
          <div className="flex-1">
              <label htmlFor="" className="sr-only">Search</label>
              <div>
              <input type="text" name="" id="" className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 sm:text-sm focus:ring-gray-900 focus:border-gray-900" placeholder="Search Blogs"/>
              </div>
          </div>
          <button type="button" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer">
            Search
          </button>
        </div>
      </form>
    </>
  );
}
