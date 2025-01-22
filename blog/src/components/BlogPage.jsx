import { useParams } from "react-router"
import { useState } from "react";
import { useTheme } from './ThemeContext';


import {Header} from "./Header"
import {Footer} from "./Footer"

import {Line} from "./Line"
import {SocialLinks} from "./SocialLinks"
import {Quote} from "./Quote"
import {Carousel} from './Carousel'

import dotLight from '/light/dotLight.png'
import dotDark from '/dark/dotDark.png'


import blogImg from '/blog/blogA1.webp'

export function BlogPage(){

    const [comment, setComment] = useState("");


    const { blog } = useParams()
    const { theme } = useTheme();

    return (
        <>
            <div className="dark:text-white dark:bg-black">
                <Header/>

                <div className="mt-16">
                    <div className="flex justify-between items-center px-3">
                        <div className="flex font-geist text-xs gap-2">
                            <div className="">Mar 23, 2023</div>
                            <div className=""> &#183;</div>
                            <div className="">2 min read</div>
                        </div>
                        <img src={theme === 'light' ? dotLight : dotDark} alt="menu" className="max-h-5"/>
                    </div>
                    <div className="mt-8 px-3">
                        <div className="font-poppins text-2xl">The Power of Consistency: Your Key to Success</div>
                        <div className="text-sm font-semibold py-6">
                           Consistency is key to success. This blog explores how small, repeated actions shape habits, build mastery, and create momentum. Learn practical strategies to stay consistent, overcome challenges, and achieve your goals.
                        </div>
                        <div className="">
                            <img src={blogImg} alt="blog Image" className="h-52 w-full"/>    
                        </div>
                        <div className="text-sm font-roboto py-6 ">
                            Consistency is often overlooked in the pursuit of success. Many people chase big wins, expecting immediate results, but fail to recognize that true progress is built on small, repeated actions over time. Whether you're trying to start a business, improve your health, or master a skill, consistency is the bridge between where you are and where you want to be.
                        </div>
                        <Quote/>
                        <div className="text-sm font-roboto py-6">
                            Before diving into the key benefits of consistency, it's important to understand that success is not an overnight phenomenon. Even the most accomplished individuals attribute their achievements to consistent effort over time.
                        </div>

                        <div className="">
                            <div className="font-poppins text-lg">Why Consistency Matters</div>
                            <div className="text-sm font-roboto py-6">
                                Consistency builds habits, shaping daily routines that determine the trajectory of your life. When you repeatedly perform an action, it becomes second nature, making it easier to stay on track. It also leads to mastery, as skills are not developed overnight but rather honed through persistent practice. Small, repeated efforts create momentum, allowing progress to build gradually over time. Moreover, consistency establishes trust and credibility, both in personal relationships and professional endeavors, proving reliability and dedication.
                            </div>
                        </div>
                         <div className="">
                            <div className="font-poppins text-lg">Overcoming Challenges</div>
                            <div className="text-sm font-roboto py-6">
                                Staying consistent isn’t easy, as distractions, lack of motivation, and self-doubt often interfere. To overcome these obstacles, it’s important to minimize temptations that break focus and stay flexible, adapting approaches as needed without giving up. Finding a strong ‘why’ behind your goals serves as a powerful motivator, reminding you why you started in the first place.
                            </div>
                        </div>
                         <div className="">
                            <div className="font-poppins text-lg">Conclusion</div>
                            <div className="text-sm font-roboto py-6">
                               Success is not about giant leaps but rather small, steady steps. Consistency is the secret weapon that turns dreams into reality. Start today, stay committed, and watch how far you go!
                            </div>
                        </div>

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

                {/*FOOTER*/}
                <Footer/>
            </div>
        </>
    )
}