import { useTheme } from './ThemeContext';
import { HamburgerMenu } from './HamburgerMenu'

import menu from '/light/menuLight.webp';


export function Header(){

	  const { theme, toggleTheme, menuOpen,setMenuOpen} = useTheme();

	return (
		<>
			<div className="">
                <img src={menu} onClick={() => setMenuOpen(!menuOpen)} className="w-5" />
                {menuOpen && <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
            </div>			
            <button className="dark:text-white" onClick={toggleTheme}>Toggle {theme}</button>
		</>
		)
}