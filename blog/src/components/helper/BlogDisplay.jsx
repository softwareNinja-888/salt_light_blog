import { BlogItem } from "./BlogItem";
import { BlogOfWeek } from "./BlogOfWeek";
import { Header } from "../Header";
import { SearchFilter } from "./SearchFilter";
import {Footer} from '../Footer'

export function BlogDisplay(){
    return (
        <>
            <div className="bg-white h-full w-screen dark:bg-theme ">
                <Header/>
                <div className="flex flex-col justify-center gap-5 items-center mt-20">
                    {/*<div className="font-poppins mt-10">Salt & Light Blogs</div>*/}
                    <BlogOfWeek/>
                </div>
                <div className="flex flex-col items-center justify-center m-auto w-10/12 mt-20">
                    <div className="font-mont text-3xl dark:text-white px-9 underline self-start">Blogs</div>
                    <BlogItem/>
                    <BlogItem/>
                    <BlogItem/>
                    <BlogItem/>
                    <BlogItem/>
                    <BlogItem/>
                    <BlogItem/>
                    <BlogItem/>
                </div>
                <div className="mt-20">
                    <Footer/>
                </div>

            </div>
        </>
    )
}