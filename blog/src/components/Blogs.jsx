import { BlogItem } from "./BlogItem";

export function Blogs(){
    return(
        <>
            <div className="font-nunito text-2xl dark:text-white px-9 underline">Top Picks</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 ">
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
            </div>
        </>
    )
}