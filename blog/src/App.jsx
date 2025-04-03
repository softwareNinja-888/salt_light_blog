import { useState } from 'react'

import { Hero } from './components/Hero'
import {ScrollToTop} from './components/helper/ScrollToTop'
import { NewsLetterTest } from './components/NewsLetterTest'
import { Blogs } from './components/helper/Blogs'
import { Post } from './components/Post'

import { blogData } from './data/blogData'


// FEATURE IMG
import image from '/blog/blogA1.webp'


function App() {
  const featuredBlog = blogData.filter(el=>el.featured === true)

  return (
    <>
      <div className={`h-full max-w-screen  overflow-x-hidden`}>
        <Hero />
        <Post img={image} feature={true} newStatus={true} postInfo={featuredBlog[0]}/>
        <Blogs/>
        <NewsLetterTest/>

        <ScrollToTop />
      </div>

    </>
  )
}

export default App
