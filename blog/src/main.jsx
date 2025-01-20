import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/ThemeContext';
import { AuthProvider } from './components/AuthContext';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

import { ScrollToTop } from './components/ScrollToTop'
import { BlogDisplay } from './components/BlogDisplay.jsx';
import { BlogPage } from './components/BlogPage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop/>
          <Routes>
            <Route path='/' >
              <Route index element={<App/>}/>
              <Route path='blogs' >
                <Route index element={<BlogDisplay/>}/>
                <Route path=':blog' element={<BlogPage/>}/>
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
