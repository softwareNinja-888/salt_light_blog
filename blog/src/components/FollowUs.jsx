import image from '/blog/blogA1.webp'
import image1 from '/blog/blogB1.webp'
import image2 from '/blog/blogC1.webp'
import image3 from '/blog/blogD1.webp'

export function FollowUs(){
    const arr = [image,image1,image2,image3]
    return (
        <>
            <div className="flex flex-col w-10/12 justify-center m-auto mt-20 dark:text-white gap-10">
                <div className="font-mono text-3xl underline">Follow Us </div>
                <div className="grid grid-cols-2 gap-3">
                    {arr.map(el=>{
                        return <img src={el} alt='social image' className='h-56'/>
                    })}
                </div>
            </div>
        </>
    )
}