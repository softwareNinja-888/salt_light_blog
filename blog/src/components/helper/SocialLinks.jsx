import { useTheme } from './ThemeContext';

import instaLight from '/light/instaLight.avif'
import xLight from '/light/xLight.avif'
import facebookLight from '/light/facebookLight.avif'
import tiktokLight from '/light/tiktokLight.avif'

import instaDark from '/dark/instaDark.avif'
import xDark from '/dark/xDark.avif'
import facebookDark from '/dark/facebookDark.avif'
import tiktokDark from '/dark/tiktokDark.avif'

export function SocialLinks({width="w-6",marginTop="mt-2",position="center"}){

    const {theme}= useTheme()

    return (
        <>
            <div className={`flex justify-${position} space-x-4 ${marginTop} gap-5`}>
                <a href="#" className={`${width}`}>
                  <img src={ theme === 'light' ? facebookLight : facebookDark } alt="facebook logo" className="" /> 
                </a>
                <a href="#" className={`${width}`}>
                  <img src={ theme === 'light' ? xLight : xDark} alt="x logo" className="w-20" />           
                </a>
                <a href="#" className={`${width}`}>
                  <img src={theme === 'light' ? instaLight : instaDark} alt="insta logo" className="" />           
                </a>
                <a href="#" className={`${width}`}>
                  <img src={theme === 'light' ? tiktokLight : tiktokDark} alt="insta logo" className="" />           
                </a>
            </div>
        </>
    )
}