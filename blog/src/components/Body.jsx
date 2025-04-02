import { About } from "./About"
import { Blogs } from "./helper/Blogs"
import { Featured } from "./helper/Featured"
import { FollowUs } from "./helper/FollowUs"
import { NewsLetter } from "./helper/NewsLetter"
export function Body(){

    return (
        <>
           <Featured/>
           <NewsLetter/>
           <Blogs/>

           
        </>
    )
}