import { BlogItem } from "./BlogItem";
import { Line } from "./Line";

export function Blogs(){
    return(
        <>
            <div className="font-mono text-3xl dark:text-white px-9 underline">Top Picks</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 ">
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
            </div>
            <div className="my-20">
                <Line/>
            </div>
        </>
    )
}