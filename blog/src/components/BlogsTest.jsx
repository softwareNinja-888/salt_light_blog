import { ArrowRight } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Post } from "./Post";

import { blogData } from "../data/blogData";

export function Projects() {
    const navigate = useNavigate()

    function handleNav(path){
		navigate(path)
	}
    const blogInfo = blogData.slice(0,4)

    return (
      <>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid md:grid-cols-2 grid-rows-[repeat(auto)] md:grid-rows-[100px_repeat(10,80px)] px-6 gap-y-16 gap-x-8 pt-50"
        >
            {/* Animated heading section */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col gap-6 text-black row-span-3 px-5"
            >
                <div className="text-xl font-inter900 text-greenPrimary">Blogs</div>
                <div className="text-3xl font-inter700">Check out our popular blogs</div>
                <div className="font-poppins">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati suscipit porro asperiores numquam magnam enim voluptatibus, a explicabo. Aliquid mollitia obcaecati deleniti nisi natus temporibus ducimus odit officia pariatur quasi.
                </div>
                <motion.div>
                    <NavLink 
                        to='/portfolio' 
                        id="learn_more" 
                        className="flex gap-2 bg-white w-6/12 justify-center items-center py-3 transition-all duration-500 ease-in-out hover:bg-greenSecondary hover:text-white text-black hover:scale-101 hover:rounded-sm"
                    >
                        <span className="text-lg font-inter700">See Blogs</span>
                        <ArrowRight className="transform -rotate-40" size={24} />
                    </NavLink>
                </motion.div>
            </motion.div>

            {/* Animated Blog Cards */}
            {blogInfo.map((blog, index) => (
                <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{scale:1.01}}
                    transition={{ duration: 0.1, delay: index * 0.2, ease: "easeOut" }}
                    className="row-span-5"
                >
                    <Post postInfo={blog} width="w-10/12" />
                </motion.div>
            ))}
                
        </motion.div>
        <div onClick={()=>{handleNav('/blogs')}} className="cursor-pointer flex justify-center items-center m-auto border font-poppins text-white bg-purple-600 border-purple-600 px-2 py-3 w-6/12 md:w-4/12 lg:w-2/12 mt-8 transition hover:scale-105 duration-300 ">
        More Posts
        </div>
      </>
    );
}
