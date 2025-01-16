import { About } from "./About"
import { Blogs } from "./Blogs"
import { Featured } from "./Featured"
import { NewsLetter } from "./NewsLetter"
export function Body(){

    return (
        <>
           <Featured/>
           <NewsLetter/>
           <Blogs/>
           <About/>
        </>
    )
}