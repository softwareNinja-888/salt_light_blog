import img from '/blog/blogD1.webp'

export function BlogPreview(){
    return (
        <>
            <div className="flex flex-col border border-black dark:border-white dark:text-white max-h-72">
                <div className="">
                    <img src={img} alt="" className="max-h-44" />
                </div>
                <div className="font-roboto m-auto text-center text-md w-8/12 py-6">
                    Hello There: 3 ways to write blog
                </div>
            </div>
        </>
    )
}