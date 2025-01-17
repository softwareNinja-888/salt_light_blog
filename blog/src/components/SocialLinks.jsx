import { useTheme } from './ThemeContext';

import instaLight from '/light/instaLight.png'
import xLight from '/light/xLight.png'
import facebookLight from '/light/facebookLight.png'
import tiktokLight from '/light/tiktokLight.png'

import instaDark from '/dark/instaDark.png'
import xDark from '/dark/xDark.png'
import facebookDark from '/dark/facebookDark.png'
import tiktokDark from '/dark/tiktokDark.png'

export function SocialLinks(){

    const {theme}= useTheme()

    return (
        <>
            <div className="flex justify-center space-x-4 mt-2 gap-5">
                <a href="#" className="w-6">
                  <img src={ theme === 'light' ? facebookLight : facebookDark } alt="facebook logo" className="" /> 
                </a>
                <a href="#" className="w-6">
                  <img src={ theme === 'light' ? xLight : xDark} alt="x logo" className="w-20" />           
                </a>
                <a href="#" className="w-6">
                  <img src={theme === 'light' ? instaLight : instaDark} alt="insta logo" className="" />           
                </a>
                <a href="#" className="w-6">
                  <img src={theme === 'light' ? tiktokLight : tiktokDark} alt="insta logo" className="" />           
                </a>
            </div>
        </>
    )
}