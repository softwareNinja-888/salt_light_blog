import { About } from "./About"
import { Blogs } from "./Blogs"
import { Featured } from "./Featured"
import { FollowUs } from "./FollowUs"
import { NewsLetter } from "./NewsLetter"
export function Body(){

    return (
        <>
           <Featured/>
           <NewsLetter/>
           <Blogs/>
           <About/>
           <FollowUs/>
        </>
    )
}