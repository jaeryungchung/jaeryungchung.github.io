import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  )
}
// App.jsx placeholder - project converted to static site
// export default function App() {
//   return null
// }
