import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { Line } from "./Line";
import { blogData } from "@data/blogData";
import { Post } from "../Post";

export function Blogs({num=6,all=false,px='px-0'}){

    const navigate = useNavigate()

    function handleNav(path){
		navigate(path)
	}
    
    const homeBlogs = blogData.slice(0,all ? blogData.length : num)

    return(
        <>
            <div className="mt-30">
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${px}`}>
                    {homeBlogs.map((el)=>{
                        return <Post key={el.post_id} postInfo={el}/>
                    })}
                </div>
                {all ? null : (
                        <>
                            <div onClick={()=>{handleNav('/blogs')}} className="cursor-pointer flex justify-center items-center m-auto border font-poppins text-white bg-purple-600 border-purple-600 px-2 py-3 w-6/12 md:w-4/12 lg:w-2/12 mt-8 transition hover:scale-105 duration-300">
                                More Posts
                            </div>
                        </>
                    )}
                <div className="my-20">
                    {/*<Line/>*/}
                </div>
            </div>
        </>
    )
}