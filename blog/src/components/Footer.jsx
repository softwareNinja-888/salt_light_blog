import { FormFooter } from "./helper/FormFooter";
import { useTheme } from './helper/ThemeContext';


import arrowLight from '/light/arrowLight.avif'
import arrowDark from '/dark/arrowDark.avif'

export function Footer(){

    const {theme} = useTheme()

    return (
        <div className="flex flex-col gap-10  dark:text-white">
            <div className="flex flex-col justify-center gap-16">
                <div className="font-poppins text-2xl text-center">Get in Contact with Us</div>
                <img src={theme === 'light' ? arrowLight : arrowDark} alt="arrow down" className="self-center animate-bounce" />
            </div>
            <FormFooter/>
            <div className="bg-gray-200 py-6">
                <div className="text-sm text-center dark:text-black">&copy; 2025 by Salt and Light Ministries</div>
            </div>
        </div>
    )
}