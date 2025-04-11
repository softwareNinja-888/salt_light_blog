import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from 'react-router-dom';

import { blogData } from "../../data/blogData";


function removeDuplicates(arr) {
  const seen = new Set();
  return arr.filter(obj => {
    // Convert the object to a string to use with Set
    const stringifiedObj = JSON.stringify(obj);
    const isDuplicate = seen.has(stringifiedObj);
    if (!isDuplicate) {
      seen.add(stringifiedObj);
      return true;
    }
    return false;
  });
}

function getBlogs(categoryIds=[3]){
  const blogs = blogData
  const relatedBlogs = []
  console.log(categoryIds)

  blogData.map(blog=>{
      categoryIds.map(id=>{
        blog.blog_category_id.map(i=>{
          i === id ? relatedBlogs.push(blog) : null;
        })
      })
  })

  return removeDuplicates(relatedBlogs)
}

// Blog card component
function BlogCard({ blog }) {
  console.log('redirect',blog)
  return (
    <NavLink to={`/blogs/${blog.post_id}`}>
        <motion.div 
          className="bg-white rounded-lg shadow-md overflow-hidden flex-1 max-w-xs"
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          onClick={()=>{handleNav(blog)}}
        >
          <img 
            src={blog.img} 
            alt={blog.title} 
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              {blog.category}
            </span>
            <h3 className="font-bold text-lg mt-1 text-gray-800 line-clamp-2">{blog.title}</h3>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{blog.preview}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs text-gray-500">{blog.formatedDate()}</span>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                Read More
              </button>
            </div>
          </div>
        </motion.div>
    </NavLink>
  );
}

export function Carousel({categoryIds}){
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  let catIds = []
  
  useEffect(() => {
    console.log(getBlogs(categoryIds) )
    const removedDuplicates = getBlogs(categoryIds) 
    setBlogs(removedDuplicates)
  }, []);
  

  const next = () => {
    setCurrentIndex(prevIndex => 
      prevIndex + 3 >= blogs.length ? 0 : prevIndex + 3
    );
  };
  
  const prev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex - 3 < 0 ? Math.max(blogs.length - 3, 0) : prevIndex - 3
    );
  };
  
  // Calculate visible blogs
  const visibleBlogs = blogs.slice(currentIndex, currentIndex + 3);
  
  if (blogs.length === 0) {
    return <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">Loading recommendations...</div>;
  }
  
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Recommended Blogs</h2>
      
      <div className="relative">
        {/* Carousel container */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="flex gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {visibleBlogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation buttons */}
        <button 
          onClick={prev} 
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          aria-label="Previous blogs"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={next} 
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          aria-label="Next blogs"
        >
          <ChevronRight size={24} />
        </button>

        {/* Pagination indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: Math.ceil(blogs.length / 3) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * 3)}
              className={`w-2 h-2 rounded-full ${
                Math.floor(currentIndex / 2) === i ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

