import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>
  )
}