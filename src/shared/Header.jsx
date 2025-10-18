import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <div className="header-inner">
      <div className="header-left" style={{display:'flex',alignItems:'center',gap:12}}>
        <a href="/"><img src="/src/assets/logo-trans.png" alt="logo" className="logo"/></a>
        <div style={{fontFamily:'Instrument Serif',fontSize:18}}>Jaeryung Chung</div>
      </div>
      <nav className="nav">
        <a href="#publications">Publication</a>
        <a href="#business">Business</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        {/* <Link to="/contact">Contact</Link> */}
      </nav>
    </div>
  )
}
