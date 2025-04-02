import { useState } from 'react'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Body } from './components/Body'
import { Footer } from './components/Footer'
import {ScrollToTop} from './components/helper/ScrollToTop'

function App() {

  return (
    <>
      <div className={`h-full max-w-screen  overflow-x-hidden`}>
        <Hero />
        <Body />
        <ScrollToTop />
      </div>

    </>
  )
}

export default App
