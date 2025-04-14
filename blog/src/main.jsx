import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/helper/ThemeContext.jsx';
import { AuthProvider } from './components/helper/AuthContext';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

import { ScrollToTop } from './components/helper/ScrollToTop'
import { PageScrollToTop } from './components/helper/PageScrollToTop.jsx'
import { Layout } from './components/Layout.jsx';
import { BlogDisplay } from './components/Blogs/BlogDisplay.jsx';
import { BlogPage } from './components/Blogs/BlogPage/BlogPage.jsx';
import { SignUp } from './components/Signin/SignUp.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <PageScrollToTop/>
          <ScrollToTop/>
          <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<App/>}/>
            <Route path='/login/signup'>
              <Route index element={<SignUp/>}/>
              {/* <Route path='signup' element={<Signup/>}/> */}
            </Route>
            <Route path='blogs'>
              <Route index element={<BlogDisplay/>}/>
              <Route path=':id' element={<BlogPage/>}/>
            </Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
