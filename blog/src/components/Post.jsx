import { Line } from "./helper/Line";

import viewLight from '/light/viewLight.avif'
import commentLight from '/light/commentLight.avif'
import heartLight from '/light/heartLight.avif'

import likeLight from '/light/likeLight.avif'
import { NavLink } from "react-router";

function truncateText(text,maxLength=244){
    if (text === undefined){
        return
    }
    return text.length > maxLength ? text.slice(0,maxLength) + '....': text;
} 
export function Post({postName='Back to Fiction: What I am reading this year.',
    feature=false,
    postInfo={},
    newStatus=false,
    img,
    width='w-100'

}){

    return(
        <>
           {postInfo === undefined ? null: (
            <NavLink to={`/blogs/${postInfo.post_id}`} className={`flex flex-col gap-5 px-10 py-10 ${width} min-h-full text-black`}>
                {feature ? (
                <div className="font-mono text-lg border border-black w-1/3 px-2 py-1 text-center">Featured Post</div>
                ): null}
                <div className={`relative group border border-black cursor-pointer ${feature ? 'w-1/3': 'w-full'} `}>
                    <div className="overflow-hidden aspect-w-1 aspect-h-1">
                        <img className="object-cover w-full h-74 transition-all duration-300 group-hover:scale-125" src={ img || postInfo.img} alt={`${postName} image`} />
                    </div>

                    {newStatus ? (
                        <div className="absolute left-3 top-3">
                            <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-700 uppercase bg-white">New</p>
                        </div>
                    ): null}
                    <div className="h-64">
                        <div className="p-3 ">
                                <div className="font-geist text-sm">
                                    Admin 
                                </div>
                                <div className="flex font-geist text-sm gap-2">
                                    <div className="">Mar 23, 2023</div>
                                    <div className=""> &#183;</div>
                                    <div className="">{postInfo.reading_time} min read</div>
                                </div>
                        </div>
                        <div className="flex flex-col gap-2 p-3 text-md">
                            <div className="font-poppins">{postInfo.title}</div>
                            <div className="font-roboto text-sm">{truncateText(postInfo.summary)}</div>
                        </div>
                        <div className="flex justify-center my-3">
                        <Line width='w-64' />
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-4">
                                <div className="flex gap-2 justify-center items-center">
                                    <img src={viewLight} alt="views" className="w-4 h-4 self-center" />
                                    <div className="">{postInfo.number_of_views}</div>
                                </div>
                                <div className="flex gap-2">
                                    <img src={commentLight} alt="comments" className="w-4 h-4 self-center" />
                                    <div className="">{postInfo.num_of_comments}</div>
                                </div>
                            </div>
                            <div className="flex flex-row-reverse gap-2">
                                <img src={likeLight} alt="like" className="w-4 h-4 self-center" />
                                <div className="">{postInfo.num_of_likes}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
           )}
        </>
    )
}