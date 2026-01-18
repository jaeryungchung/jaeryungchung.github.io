import React from 'react'
import Header from '../shared/Header'
import Profile from '../shared/Profile'
import About from '../shared/About'
import Video from '../shared/Video'
import Publications from '../shared/Publications'
import Projects from '../shared/Projects'
import Business from '../shared/Business'
import Education from '../shared/Education'
import Contact from '../shared/Contact'
import Footer from '../shared/Footer'

export default function Home(){
  return (
    <div>
      <div className="header-wrapper"><Header/></div>
      <div className="content-wrapper">
        <div className="site">
          <aside className="sidebar">
            <Profile/>
          </aside>
          <main className="main">
            <About/>
            <Video/>
            <Publications/>
            <Business/>
            <Projects/>
            <Education/>
            <Contact/>
            {/* <Footer/> */}
          </main>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
