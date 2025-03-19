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
import { BlogDisplay } from './components/helper/BlogDisplay.jsx';
import { BlogPage } from './components/BlogPage/BlogPage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop/>
          <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<App/>}/>
            {/* <Route path='blogs'>
              <Route index element={<BlogDisplay/>}/>
              <Route path=':blog' element={<BlogPage/>}/>
            </Route> */}
          
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
