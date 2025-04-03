import { MobileMenu } from './helper/MobileMenu'
import { LogoSvg } from './helper/LogoSvg';

import { useNavigate } from 'react-router'
import { useState } from 'react';
import { Line } from './helper/Line';

export function Header({
    logoImg='/logo.svg',
    links=['Home','Blogs','Log In/Sign Up',],
    btnName="Let's Talk",
    sticky=true,}
){

    // FOR HEADER COMPONET ALSO NEEDS MENU COMPONENT WHICH IS IN HELPER FOLDER. src/components/helper/MobileMenu.jsx
    // ALSO REQUIRES INSTALLATION OF REACT ROUTER

    const [menuOpen, setMenuOpen ] = useState(false)
	const navigate = useNavigate()

	function handleNav(path){
		navigate(path.toLowerCase())
	}

    return ( 
        <>
			<div className={`${sticky ? 'sticky top-0 z-50' : null}`}>
                <div className={`bg-white flex justify-between mx-auto md:justify-between items-center px-10 md:px-23 py-12 h-16 `}>
                    <div className="flex justify-center items-center gap-2 dark:text-white cursor-pointer" onClick={()=>{handleNav("/")}}>
                        <LogoSvg path='/svgLogo/logo6.svg'/>
                    </div>
                    
                    <nav className={`hidden md:flex md:space-x-10 lg:space-x-20 text-xl font-mont`}>
                        {links.map((link,index)=>{
                            return (
                                
                                <div key={index} className={`flex gap-1.5 no-underline relative cursor-pointer after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 dark:hover:after:bg-white hover:after:bg-black text-base max-[500px]:text-xs` } onClick={()=>{handleNav(`/${link === 'Home' ? '' : link}`)}}>
                                    {link}
                                </div>
                            )
                        })}
                    </nav>
                    <div className="md:hidden">
                        <svg
                            onClick={() => setMenuOpen(!menuOpen)} 
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        {menuOpen && <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
                    </div>		

                    
                </div>
                <Line/>
            </div>
            	
		</>
    )
}