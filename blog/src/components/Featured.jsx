import image from '/blog/blogA1.webp'

export function Featured(obj){
    return (
        <>
            <div className="">
                <div className="flex flex-col gap-4 ml-6 mt-16 dark:text-white md:w-4/12">
                    <div className="font-mono text-lg border border-black dark:border-white w-7/12 px-2 py-1 text-center">Featured Post</div>
                    <div className="flex flex-col border border-black dark:border-white w-11/12 ">
                        <div className="">
                            <img src={image} alt="blog image" className="h-60 w-full" />
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
                            <div className="font-poppins">Back to Fiction: What I am reading this year.</div>
                            <div className="font-roboto text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta aperiam voluptatum autem blanditiis id! Molestias amet.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}