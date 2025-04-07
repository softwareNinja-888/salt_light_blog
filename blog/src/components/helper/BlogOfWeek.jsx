import { NavLink } from "react-router"
import { blogData } from "../../data/blogData"
export function BlogOfWeek(){

    const BlogOfWeek = blogData.filter(el=>el.featured === true)[0]
    console.log(BlogOfWeek)
    
    return (
        <>
            <div className="flex bg-center bg-cover bg-no-repeat h-72 px-5 py-5 relative w-10/12 border border-black bg-center bg-cover" style={{backgroundImage: "url('/blog/blogB1.webp')"}}>
                <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
                <div className="flex flex-col gap-4 relative z-10 justify-center">
                    <div className="text-white font-poppins text-lg">Blog of the Week</div>
                    <div className="text-white font-mono text-md">{BlogOfWeek.title}</div>
                    <NavLink to={`/blogs/${BlogOfWeek.post_id}`} className="font-nunito text-black border border-white w-7/12 flex justify-center px-6 py-2 bg-white text-sm">Read More</NavLink>
                </div>
            </div>
        </>
    )
}