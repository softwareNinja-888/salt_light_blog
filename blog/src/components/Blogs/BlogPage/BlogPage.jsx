import { useParams } from "react-router"
import { useState } from "react";

import ReactMarkdown from 'react-markdown'

import {Line} from "../../helper/Line"
import {SocialLinks} from "../../helper/SocialLinks"
import {Quote} from "../../helper/Quote"
import {Carousel} from '../../helper/Carousel'

import dotLight from '/light/dotLight.avif'


import blogImg from '/blog/blogA1.webp'
import { blogData } from "../../../data/blogData";

function formatCamelCase(text){
    return text.replace(/([A-Z])/g, ' $1').replace(/^./, str=>str.toUpperCase()).trim();
}
export function BlogPage(){

    const [comment, setComment] = useState("");


    const { id } = useParams()

    const blogInfo = blogData.filter(el=> el.post_id === Number(id))[0]
    const sections = Object.keys(blogInfo.content)
    const content = JSON.stringify(blogInfo.content)

    console.log(blogInfo.content)

    return (
        <>
            <div className="flex flex-col mx-auto lg:w-10/12 ">

                <div className="mt-16">
                    <div className="flex justify-between items-center px-3">
                        <div className="flex font-geist text-xs gap-2">
                            <div className="">Mar 23, 2023</div>
                            <div className=""> &#183;</div>
                            <div className="">2 min read</div>
                        </div>
                        <img src={dotLight} alt="menu" className="max-h-5"/>
                    </div>
                    <div className="mt-8 px-3">
                        <div className="font-poppins text-2xl">{blogInfo.title}</div>
                        <div className="text-sm font-semibold py-6">
                          {blogInfo.summary}
                        </div>
                        <div className="">
                            <img src={blogInfo.img} alt="blog Image" className="h-52 lg:h-96 w-full"/>    
                        </div>
                        {/* <div className="text-sm font-roboto py-6 ">
                            {blogInfo.content.introduction}
                        </div> */}
                        {/* <Quote/> */}
                        {sections.map(section=>{
                            return (
                                <>
                                    <div className="">
                                        <div className="font-poppins text-lg">{formatCamelCase(section)}</div>
                                        <div className="prose prose-lg prose-blue text-sm font-roboto py-6">
                                            <ReactMarkdown>{blogInfo.content[section]}</ReactMarkdown>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>

                {/*GENRE*/}
                <div className="text-xs px-3 font-poppins">Motivation &#183; Productivity &#183; Discipline</div>

                <div className="flex px-3 py-7">
                    <SocialLinks marginTop="mt-0" postion="start" width="w-5"/>      
                </div>
                <div className="pb-10">
                    <Line/>
                </div>

                {/*CAROUSEL POST */}
                <Carousel/>

                {/*COMMENTS*/}
                <div className="">
                     <div className="flex flex-col gap-6">
                        <Line />
                        <div className="px-3 font-lora">Comments</div>
                        <Line/>
                    </div>
                    <div className="px-3 py-6"> 
                        <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Your comment..." className="w-full px-3 py-2 border border-black focus:border-none focus:outline-none focus:ring-2 focus:ring-purple-500 h-24 resize-none" >  
                        </textarea>
                    </div>
                </div>
            </div>
        </>
    )
}