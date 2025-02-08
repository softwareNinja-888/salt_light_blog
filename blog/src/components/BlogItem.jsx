import { Line } from './Line'
import { useTheme } from './ThemeContext';
import image from '/blog/blogB1.webp'

import viewLight from '/light/viewLight.avif'
import commentLight from '/light/commentLight.avif'
import heartLight from '/light/heartLight.avif'

import likeLight from '/light/likeLight.avif'
import likeDark from '/dark/likedDark.avif'


import viewDark from '/dark/viewDark.avif'
import commentDark from '/dark/commentDark.avif'
import heartDark from '/dark/heartDark.avif'

export function BlogItem(obj){

    const {theme} = useTheme()
    return (
        <>
            <div className="">
                <div className="flex flex-col gap-4 ml-6 mt-10 dark:text-white">
                    <div className="flex flex-col border border-black dark:border-white w-11/12 ">
                        <div className="">
                            <img src={image} alt="blog image" className="h-52" />
                        </div>
                        <div className="p-3">
                            <div className="font-geist text-sm">
                                Admin 
                            </div>
                            <div className="flex font-geist text-sm gap-2">
                                <div className="">Mar 23, 2023</div>
                                <div className=""> &#183;</div>
                                <div className="">2 min read</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-3 text-md">
                            <div className="font-poppins">Power of Prayer: What I am reading this year.</div>
                            <div className="font-roboto text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta aperiam voluptatum autem blanditiis id! Molestias amet.</div>
                        </div>
                        <div className="flex justify-center my-3">
                            <Line width='w-64' />
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-4">
                                <div className="flex gap-2 justify-center items-center">
                                    <img src={theme === 'light' ? viewLight : viewDark } alt="views" className="w-4 h-4 self-center" />
                                    <div className="">0</div>
                                </div>
                                <div className="flex gap-2">
                                    <img src={theme === 'light' ? commentLight : commentDark } alt="comments" className="w-4 h-4 self-center" />
                                    <div className="">0</div>
                                </div>
                            </div>
                            <div className="flex flex-row-reverse gap-2">
                                <img src={theme === 'light' ? likeLight : likeDark} alt="like" className="w-4 h-4 self-center" />
                                <div className="">11</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

