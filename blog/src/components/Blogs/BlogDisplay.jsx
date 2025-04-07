import { BlogOfWeek } from "../helper/BlogOfWeek";
import { Blogs } from "../helper/Blogs";

export function BlogDisplay(){
    return (
        <>
            <div className="bg-white h-full w-screen dark:bg-theme overflow-hidden ">
                <div className="flex flex-col justify-center gap-5 items-center mt-20">
                    <BlogOfWeek/>
                </div>
                <div className="mt-30">
                   <Blogs all={true}/>
                </div>
            </div>
        </>
    )
}