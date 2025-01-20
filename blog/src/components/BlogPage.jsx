import { useParams } from "react-router"

export function BlogPage(obj){

    const {blog} = useParams()
    console.log(blog)
    return (
        <>
            <div className="text-6xl text-red-500">{blog}</div>
        </>
    )
}