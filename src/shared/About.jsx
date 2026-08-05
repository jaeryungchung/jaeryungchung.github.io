import React from 'react'
import { motion } from 'framer-motion'
import cv from '../assets/CV_JaeryungChung.pdf'
import portfolio from '../assets/Portfolio_JaeryungChung_6.pdf'

export default function About(){
  return (
    <section className="section" id="about">
      <motion.h2 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>About</motion.h2>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        <p>
        Hello! I am a <strong>Full-Stack System Designer & Researcher in HCI</strong> bridging the magic of creativity and the rigor of technical feasibility.</p>
        {/* I believe in the power of <strong>creativity and imagination</strong> that enriches our world. </p> */}
        {/* <p></p> */}
        {/* <p>My current self-driven motivation explores creativity support tools (CSTs) in HCI — powered by generative AI, VR, and data visualization. I am a Master's student in the Department of <a href="https://id.kaist.ac.kr/" target="_blank" rel="noopener">Industrial Design</a> at <a href="https://www.kaist.ac.kr/en/" target="_blank" rel="noopener">KAIST</a>, conducting research under Prof. <a href="https://takyeonlee.com/" target="_blank" rel="noopener">Tak Yeon Lee</a> in the <a href="https://ai-experience-lab.github.io/" target="_blank" rel="noopener">AI Experience Lab</a>. 
        </p> */}
        {/* <p>
          I am seeking internship opportunities at global firms in UX research, design, project management, or marketing. With a multidisciplinary background spanning business, interaction design, and content creation, I am ready to contribute diverse perspectives and drive meaningful results.
        </p> */}
        <p>Feel free to contact me for a <a href="#contact">coffee chat ☕ </a>  for any inquiries.</p>
        <p style={{marginTop: '1.5rem'}} ><a href={cv} target="_blank" className="document-link">CV</a> 
        {/* • <a href={portfolio} target="_blank" className="document-link">Portfolio</a> */}
        </p>
        Flagship Project: <a href="https://creativitysupport.github.io/" target="_blank" rel="noopener">🔗 WrightHere</a>
      </motion.div>
    </section >
  )
}

