import { useTheme } from './helper/ThemeContext';
import { HamburgerMenu } from './helper/HamburgerMenu'
import { Line } from './helper/Line';
import { ThemeToggle } from './helper/ToggleTheme';

import { useNavigate } from 'react-router'

import menuLight from '/light/menuLight.avif';
import menuDark from '/dark/menuDark.avif';
import { LogoSvg } from './helper/LogoSvg';


export function Header(){

	const {  theme,menuOpen,setMenuOpen} = useTheme();
	const navigate = useNavigate()

	function handleNav(path){
		navigate(path)
	}

		// HANDLE SCROLL
	function toSection (section) {
		// UNCOMMENT WHEN ADDING DIFFERENT PAGES TO SITE:

		// const contactSection = document.getElementById(section);
		// contactSection ? contactSection?.scrollIntoView({ behavior: "smooth" }) : handleNav(section);
		return null
	};

	return (
		<>
			<div className="flex justify-between md:justify-around items-center px-3 py-12 h-16">
				<div className="flex justify-center items-center gap-2 dark:text-white cursor-pointer" onClick={()=>{handleNav("/")}}>
					<LogoSvg path='/svgLogo/logo6.svg' theme={theme}/>
				</div>
				<ThemeToggle/>
				<div className="mr-4 md:hidden">
            	    <img src={theme === 'light' ? menuLight : menuDark} onClick={() => setMenuOpen(!menuOpen)} className="w-5 " />
            	    {menuOpen && <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
            	</div>			
            	 <nav className="hidden md:flex md:space-x-10 lg:space-x-20 text-sm text-black dark:text-white font-mont ">

	                <div className=" flex gap-1.5 no-underline relative cursor-pointer text-inherit after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 dark:hover:after:bg-white hover:after:bg-black text-base max-[500px]:text-xs" onClick={()=>{toSection('/blogs')}}>
	                    Blogs
	                </div>

	                <div className=" flex gap-1.5 no-underline relative cursor-pointer text-inherit after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 dark:hover:after:bg-white hover:after:bg-black text-base max-[500px]:text-xs"  onClick={()=>{toSection('/blogs/lifestyle')}}>
	                    Lifestyle
	                </div>

	                <div className=" flex gap-1.5 no-underline relative cursor-pointer text-inherit after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 dark:hover:after:bg-white hover:after:bg-black text-base max-[500px]:text-xs"  onClick={()=>{toSection('about')}}>
	                    About Us
	                </div>

	                <div className=" flex gap-1.5 no-underline relative cursor-pointer text-inherit after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 dark:hover:after:bg-white hover:after:bg-black text-base max-[500px]:text-xs"  onClick={()=>{toSection('/signup')}}>
	                    Log In/Sign Up
	                </div>

	            </nav>
				
			</div>
			<Line />
		</>
		)
}