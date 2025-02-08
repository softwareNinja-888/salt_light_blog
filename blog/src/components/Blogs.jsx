import { BlogItem } from "./BlogItem";
import { Line } from "./Line";

export function Blogs(){
    return(
        <>
            <div id="blogs" className="font-mont text-3xl dark:text-white px-9 underline">Blogs</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
            </div>
            <div className="flex justify-center items-center m-auto border font-poppins text-white bg-purple-600 border-purple-600 px-2 py-3 w-6/12 mt-8">
                More Posts
            </div>
            <div className="my-20">
                <Line/>
            </div>
        </>
    )
}