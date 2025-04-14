import { Line } from "./helper/Line";

import viewLight from '/light/viewLight.avif'
import commentLight from '/light/commentLight.avif'
import likeLight from '/light/likeLight.avif'

import { NavLink } from "react-router";
import { authorData } from "../data/authorData";

function truncateText(text,maxLength=244){
    if (text === undefined){
        return
    }
    return text.length > maxLength ? text.slice(0,maxLength) + '....': text;
} 
function isWithinXDays(dateStr){
    const now = new Date()
    const targetDate = new Date(dateStr)

    const diffInMs = now - targetDate
    const diffInDays = diffInMs / (1000 * 60 * 60 *24)

    return diffInDays >= 0 && diffInDays <= 5;
}
export function Post({postName='Back to Fiction: What I am reading this year.',
    feature=false,
    postInfo={},
    newStatus=false,
    img ='https://fakeimg.pl/600x400?text=profile',
    width='w-100'

}){

    const blogAuthor = authorData.filter(author=>author.author_id === postInfo.author_id)[0]
    newStatus = isWithinXDays(postInfo.created_at)
    console.log(`${postInfo.title}`,newStatus)


    return(
        <>
           {postInfo === undefined ? null: (
            <div className={`flex flex-col gap-5 px-10 py-10 ${width} min-h-fit text-black`}>
                {feature ? (
                <div className="font-mono text-lg border border-black w-1/3 px-2 py-1 text-center">Featured Post</div>
                ): null}
                <NavLink to={`/blogs/${postInfo.post_id}`} className={`relative group border-1 border-black cursor-pointer ${feature ? 'w-1/3': 'w-full'} `}>
                    {/* BLOG IMAGE */}
                    <div className="overflow-hidden aspect-w-1 aspect-h-1">
                        <img className="object-cover w-full h-74 transition-all duration-300 group-hover:scale-125" src={postInfo.imgPath() || img  } alt={`${postName} image`} />
                        {console.log('look:',postInfo.imgPath())}
                    </div>

                    {/* NEW STATUS*/}
                    {newStatus ? (
                        <div className="absolute left-3 top-3">
                            <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-700 uppercase bg-white">New</p>
                        </div>
                    ): null}

                    {/*  */}
                    <div className="flex flex-col">
                        <div className="p-3  ">
                                <div className="flex gap-2 font-poppins text-sm mb-3">
                                    <img src={blogAuthor.profile_picture} alt="profile image" className="w-8 h-8" />
                                    <div className="self-center">{blogAuthor.name}</div>
                                </div>
                                <div className="flex font-geist text-sm gap-2">
                                    <div className="">{postInfo.formatedDate()}</div>
                                    <div className=""> &#183;</div>
                                    <div className="">{postInfo.reading_time} min read</div>
                                </div>
                        </div>
                        <div className="flex flex-col gap-2 p-3 text-md h-40 ">
                            <div className="font-poppins">{postInfo.title}</div>
                            <div className="font-roboto text-sm">{truncateText(postInfo.summary)}</div>
                        </div>
                        <div className="flex justify-center my-0  ">
                        <Line width='w-64' />
                        </div>
                        <div className="flex justify-between py-2 px-1 ">
                            <div className="flex items-center justify-center gap-4">
                                <div className="flex gap-2 justify-center items-center">
                                    <img src={viewLight} alt="views" className="w-4 h-4 self-center" />
                                    <div className="">{postInfo.number_of_views}</div>
                                </div>
                                <div className="flex gap-2">
                                    <img src={commentLight} alt="comments" className="w-4 h-4 self-center" />
                                    <div className="">{postInfo.numOfComments()}</div>
                                </div>
                            </div>
                            <div className="flex flex-row-reverse gap-2">
                                <img src={likeLight} alt="like" className="w-4 h-4 self-center" />
                                <div className="">{postInfo.num_of_likes}</div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
           )}
        </>
    )
}