import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section className="section" id="about">
      <motion.h2 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>About</motion.h2>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        <p>
        I believe in the power of <strong>creativity and imagination</strong> that enriches our world. </p>
        <p></p>
        <p>My current, self-driven research explores Creativity Support Tools (CSTs) powered by Generative AI and Large Language Models, focused on creative writing and choreography generation. I also maintain strong interests in Data Visualization and Ubiquitous Computing.
        </p>
        <p>
          I am a Master's student in the Department of <a href="https://id.kaist.ac.kr/" target="_blank" rel="noopener">Industrial Design</a> at <a href="https://www.kaist.ac.kr/en/" target="_blank" rel="noopener">KAIST</a>, conducting research under Prof. <a href="https://takyeonlee.com/" target="_blank" rel="noopener">Tak Yeon Lee</a> in the <a href="https://ai-experience-lab.github.io/" target="_blank" rel="noopener">AI Experience Lab</a>. I'm exploring PhD opportunities in HCI, and roles in global business and project management.
        </p>
        <p>Feel free to <a href="#contact">contact me</a> for a coffee chat ☕</p>
      </motion.div>
    </section >
  )
}

