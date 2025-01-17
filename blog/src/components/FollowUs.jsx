import image from '/blog/blogA1.webp'
import image1 from '/blog/blogB1.webp'
import image2 from '/blog/blogC1.webp'
import image3 from '/blog/blogD1.webp'

import image4 from '/blog/churchA1.webp'
import image5 from '/blog/churchB1.webp'
import image6 from '/blog/churchC1.webp'
import image7 from '/blog/churchD1.webp'
import image8 from '/blog/churchE1.webp'
import image9 from '/blog/churchF1.webp'

import { useTheme } from './ThemeContext';
import { SocialLinks } from './SocialLinks'
import { Line } from './Line'

import {v4 as uuidv4} from 'uuid'


export function FollowUs(){
    const arr = [image,image1,image2,image3,image4,image5,image6,image7,image8,image9]

    const {theme} = useTheme()
    return (
        <>
            <div className="flex flex-col w-10/12 justify-center m-auto mt-20 dark:text-white gap-10">
                <div className="font-mono text-3xl underline">Follow Us </div>
                <div className="grid grid-cols-2 gap-3">
                    {arr.map(el=>{
                        return <img key={uuidv4()} src={el} alt='social image' className='h-20 w-32'/>
                    })}
                </div>
                <SocialLinks/>
            </div>
            <div className="my-20">
                <Line/>
            </div>
        </>
    )
}