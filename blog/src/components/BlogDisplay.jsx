import { BlogItem } from "./BlogItem";
import { BlogOfWeek } from "./BlogOfWeek";
import { Header } from "./Header";

export function BlogDisplay(){
    return (
        <>
            <div className="bg-white h-full w-screen dark:bg-theme ">
                <Header/>
                <div className="flex flex-col justify-center gap-5 items-center">
                    <div className="font-poppins mt-10">Salt & Light Blogs</div>
                    <BlogOfWeek/>
                </div>

            </div>
        </>
    )
}