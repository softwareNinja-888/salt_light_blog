import { useTheme } from './ThemeContext';
import { HamburgerMenu } from './HamburgerMenu'
import { Line } from './Line';
import { ThemeToggle } from './ToggleTheme';

import { useNavigate } from 'react-router'

import fishLight from '/light/fishLight.png'
import fishDark from '/dark/fishDark.png'
import logoDark from '/dark/logoDarkT.jpeg'
import menuLight from '/light/menuLight.webp';
import menuDark from '/dark/menuDark.png';


export function Header(){

	const {  theme,menuOpen,setMenuOpen} = useTheme();
	const navigate = useNavigate()

	function handleNav(path){
		navigate(path)
	}

	return (
		<>
			<div className="flex justify-between items-center px-3 h-16">
				<div className="flex justify-center items-center gap-2 dark:text-white" onClick={()=>{handleNav("/")}}>
					<div className="font-inter text-xl">
						Salt&Light
					</div>
					<img src={theme === 'light' ? fishLight : fishDark} alt="fish symbol" className="w-6 h-6 self-center rotate-180"/>
				</div>
				<ThemeToggle/>
				<Line direction={'vertical'}/>
				<div className="mr-4">
            	    <img src={theme === 'light' ? menuLight : menuDark} onClick={() => setMenuOpen(!menuOpen)} className="w-5" />
            	    {menuOpen && <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
            	</div>			
				
			</div>
			<Line />
		</>
		)
}