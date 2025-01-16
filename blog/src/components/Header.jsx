import { useTheme } from './ThemeContext';


export function Header(){

	  const { theme, toggleTheme } = useTheme();

	return (
		<>
			<h1 className="text-6xl dark:text-white">Hello World</h1>
			<button className="dark:text-white" onClick={toggleTheme}>Toggle {theme}</button>
		</>
		)
}