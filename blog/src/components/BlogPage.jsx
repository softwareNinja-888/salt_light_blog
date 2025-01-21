import { useParams } from "react-router"
import {Header} from "./Header"
import {Quote} from "./Quote"

import blogImg from '/blog/blogA1.webp'

export function BlogPage(obj){

    const {blog} = useParams()
    console.log(blog)
    return (
        <>
            <div className="">
                <Header/>
                <div className="w-screen bg-purple-600 text-white px-2 py-3 font-roboto mt-20">
                    Post
                </div>
                <div className="flex justify-between px-2 py-2">
                    All Post
                    <img src="" alt="arrow"/>
                </div>
                <div className="mt-20">
                    <div className="flex justify-between px-3">
                        <div className="flex font-geist text-xs gap-2">
                            <div className="">Mar 23, 2023</div>
                            <div className=""> &#183;</div>
                            <div className="">2 min read</div>
                        </div>
                        <img src="" alt="menu"/>
                    </div>
                    <div className="mt-8 px-3">
                        <div className="font-poppins text-2xl">The Power of Consistency: Your Key to Success</div>
                        <div className="text-sm font-semibold py-6">
                           Consistency is key to success. This blog explores how small, repeated actions shape habits, build mastery, and create momentum. Learn practical strategies to stay consistent, overcome challenges, and achieve your goals.
                        </div>
                        <div className="">
                            <img src={blogImg} alt="blog Image" className="h-52 w-full"/>    
                        </div>
                        <div className="text-sm font-roboto ">
                            Consistency is often overlooked in the pursuit of success. Many people chase big wins, expecting immediate results, but fail to recognize that true progress is built on small, repeated actions over time. Whether you're trying to start a business, improve your health, or master a skill, consistency is the bridge between where you are and where you want to be.
                        </div>
                        <Quote/>
                    </div>
                </div>
            </div>
        </>
    )
}