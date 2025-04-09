import { BlogOfWeek } from "../helper/BlogOfWeek";
import { Blogs } from "../helper/Blogs";

export function BlogDisplay(){
    return (
        <>
            <div className="bg-white h-full max-w-12/12">
                <div className="flex flex-col justify-center gap-5 items-center mt-20 overflow-hidden">
                    <BlogOfWeek/>
                </div>
                <Blogs all={true}/>
               
            </div>
        </>
    )
}