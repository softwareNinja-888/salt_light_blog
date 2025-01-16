import { useTheme } from './ThemeContext';
import { HamburgerMenu } from './HamburgerMenu'
import { ThemeToggle } from './ToggleTheme';

import menu from '/light/menuLight.webp';


export function Header(){

	  const {  menuOpen,setMenuOpen} = useTheme();

	return (
		<>
			<div className="">
                <img src={menu} onClick={() => setMenuOpen(!menuOpen)} className="w-5" />
                {menuOpen && <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
            </div>			
            <ThemeToggle/>
		</>
		)
}