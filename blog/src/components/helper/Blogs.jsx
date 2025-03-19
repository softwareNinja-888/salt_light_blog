import { useNavigate } from "react-router";
import { BlogItem } from "./BlogItem";
import { Line } from "./Line";
import { blogData } from "@data/blogData";

export function Blogs(){

    const navigate = useNavigate()

    function handleNav(path){
		navigate(path)
        console.log(path)
	}

    console.log(blogData)

    return(
        <>
            <div id="blogs" className="font-mont text-3xl dark:text-white px-9 underline">Blogs</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
                {blogData.map(el=>{
                    return <BlogItem obj={el}/>
                })}
                {/* <BlogItem/>
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
                <BlogItem/> */}
            </div>
            <div onClick={()=>{handleNav('/blogs')}} className="cursor-pointer flex justify-center items-center m-auto border font-poppins text-white bg-purple-600 border-purple-600 px-2 py-3 w-6/12 md:w-4/12 lg:w-2/12 mt-8 transition hover:scale-105 duration-300">
                More Posts
            </div>
            <div className="my-20">
                <Line/>
            </div>
        </>
    )
}