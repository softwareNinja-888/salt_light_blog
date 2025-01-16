import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import { Header } from './components/Header'

import { useTheme } from './components/ThemeContext';


function App() {
  const [count, setCount] = useState(0);

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="bg-white h-screen w-screen dark:bg-black">
        <Header/>
      </div>

    </>
  )
}

export default App
