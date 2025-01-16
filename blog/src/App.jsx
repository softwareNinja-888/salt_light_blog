import { useState } from 'react'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Body } from './components/Body'


import { useTheme } from './components/ThemeContext';


function App() {
  const [count, setCount] = useState(0);

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="bg-white h-screen w-screen dark:bg-theme">
        <Header/>
        <Hero/>
        <Body/>
      </div>

    </>
  )
}

export default App
