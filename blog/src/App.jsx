import { useState } from 'react'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Body } from './components/Body'
import { Footer } from './components/Footer'
import {ScrollToTop} from './components/helper/ScrollToTop'



import { useTheme } from './components/ThemeContext';


function App() {

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="bg-white h-full w-screen dark:bg-theme">
        <Header/>
        <Hero/>
        <Body/>
        <Footer/>
        <ScrollToTop/>
      </div>

    </>
  )
}

export default App
