import { useParams } from "react-router"
import { useState } from "react";

import ReactMarkdown from 'react-markdown'

import {Line} from "../../helper/Line"
import {SocialLinks} from "../../helper/SocialLinks"
import {Comment} from "../../helper/Comment"

import {Quote} from "../../helper/Quote"
import {Carousel} from '../../helper/Carousel'

import dotLight from '/light/dotLight.avif'


import blogImg from '/blog/blogA1.webp'
import { blogData } from "@data/blogData";
import { commentsData } from "@data/commentData";
import { categoryData } from "@data/categoryData";
import formatDate  from "@src/util/util.jsx";



function formatCamelCase(text){
    return text.replace(/([A-Z])/g, ' $1').replace(/^./, str=>str.toUpperCase()).trim();
}
export function BlogPage(){

    const [comment, setComment] = useState("");
    const { id } = useParams()

    const blogInfo = blogData.filter(el=> el.post_id === Number(id))[0]
    const sections = Object.keys(blogInfo.content)
    const content = JSON.stringify(blogInfo.content)

    let categories = []
    const categoryIds = blogInfo.blog_category_id


    categoryIds.map(id=>{
        categories.push(categoryData.filter(category=>{
            return category.category_id === id
        }))
    })



    return (
        <>
            <div className="flex flex-col mx-auto lg:w-10/12 text-black">

                <div className="mt-16 ">
                    <div className="flex justify-between items-center px-3">
                        <div className="flex font-geist text-xs gap-2">
                            <div className="">{formatDate(blogInfo.published_at)}</div>
                            <div className=""> &#183;</div>
                            <div className="">{blogInfo.reading_time} min read</div>
                        </div>
                        <img src={dotLight} alt="menu" className="max-h-5 lg:hidden"/>
                    </div>
                    <div className="mt-8 px-3">
                        <div className="font-poppins text-2xl">{blogInfo.title}</div>
                        <div className="text-sm font-semibold py-6">
                          {blogInfo.summary}
                        </div>
                        <div className="">
                            <img src={blogInfo.img} alt="blog Image" className="h-52 md:h-[400px] lg:h-[500px] w-full"/>    
                        </div>  

                        {sections.map(section=>{
                            return (
                                <>
                                    <div  className="mt-10">
                                        <div className="font-poppins text-lg">{formatCamelCase(section)}</div>
                                        <div className="prose prose-lg prose-blue text-sm font-roboto mt-5">
                                            <ReactMarkdown>{blogInfo.content[section]}</ReactMarkdown>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>


                {}

                {/*GENRE*/}
                <div className='flex gap-1 text-xs px-3 font-poppins mt-10'>
                    {categories.map((category,index)=>{
                        return (
                            <div key={category.category_id}>{category[0].name} &#183; </div>
                        )
                    })}
                </div>

                <div className="flex px-3 py-7">
                    <SocialLinks marginTop="mt-0" postion="start" width="w-5"/>      
                </div>
                <div className="pb-10">
                    <Line/>
                </div>

                {/*CAROUSEL POST */}
                <Carousel categoryIds={blogInfo.blog_category_id}/>

                {/*COMMENTS*/}
                <div className="py-40">
                     <div className="flex flex-col gap-6">
                        <Line />
                        <div className="px-3 font-lora">{blogInfo.numOfComments()} Comments</div>
                        <Line/>
                    </div>
                    <div className="px-3 py-6"> 
                        <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Your comment..." className="w-full px-3 py-2 border border-black focus:border-none focus:outline-none focus:ring-2 focus:ring-purple-500 h-24 resize-none" >  
                        </textarea>
                    </div>
                    <div className='flex flex-col gap-16 px-10'>
                        {blogInfo.comments.comments.map(comment=>{
                            return (
                                <Comment key={comment.comment_id} obj={comment}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}