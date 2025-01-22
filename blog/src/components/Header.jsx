import { useTheme } from './ThemeContext';
import { HamburgerMenu } from './HamburgerMenu'
import { Line } from './Line';
import { ThemeToggle } from './ToggleTheme';

import { useNavigate } from 'react-router'

import logo from '/light/logoLight.webp'
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
			<div className="flex justify-between items-center px-3 h-14">
				<div className="" onClick={()=>{handleNav("/")}}>
					<img src={logo} alt="logo" className="w-32" />
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