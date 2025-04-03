import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/helper/ThemeContext.jsx';
import { AuthProvider } from './components/helper/AuthContext';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

import { ScrollToTop } from './components/helper/ScrollToTop'
import { Layout } from './components/Layout.jsx';
import { BlogDisplay } from './components/Blogs/BlogDisplay.jsx';
import { BlogPage } from './components/Blogs/BlogPage/BlogPage.jsx';
import { Signin } from './components/Signin/Signin.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop/>
          <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<App/>}/>
            <Route path='signin'>
              <Route index element={<Signin/>}/>
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
