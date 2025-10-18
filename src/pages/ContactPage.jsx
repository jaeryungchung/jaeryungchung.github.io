import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../shared/Header'
import Contact from '../shared/Contact'
import Footer from '../shared/Footer'

export default function ContactPage(){
  const navigate = useNavigate()

  return (
    <div>
      <div className="header-wrapper"><Header/></div>
      <div className="content-wrapper">
        <div style={{padding:32,flex:1}}>
          <button onClick={() => navigate(-1)} className="btn btn-back" aria-label="Go back" style={{marginBottom:16}}>← Back</button>
          <Contact/>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}
