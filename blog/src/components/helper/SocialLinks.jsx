
import instaLight from '/light/instaLight.avif'
import xLight from '/light/xLight.avif'
import facebookLight from '/light/facebookLight.avif'
import tiktokLight from '/light/tiktokLight.avif'

import instaDark from '/dark/instaDark.avif'
import xDark from '/dark/xDark.avif'
import facebookDark from '/dark/facebookDark.avif'
import tiktokDark from '/dark/tiktokDark.avif'

export function SocialLinks({width="w-6",marginTop="mt-2",position="center"}){


    return (
        <>
            <div className={`flex justify-${position} space-x-4 ${marginTop} gap-5`}>
                <a href="#" className={`${width}`}>
                  <img src={facebookLight } alt="facebook logo" className="" /> 
                </a>
                <a href="#" className={`${width}`}>
                  <img src={ xLight} alt="x logo" className="w-20" />           
                </a>
                <a href="#" className={`${width}`}>
                  <img src={instaLight} alt="insta logo" className="" />           
                </a>
                <a href="#" className={`${width}`}>
                  <img src={tiktokLight} alt="insta logo" className="" />           
                </a>
            </div>
        </>
    )
}