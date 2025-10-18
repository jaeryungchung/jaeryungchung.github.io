import React from 'react'
import { motion } from 'framer-motion'

export default function Video(){
  return (
    <section className="section" id="video">
      <motion.h2 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}> </motion.h2>
      <motion.div className="video-wrapper" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        <div className="video-ratio" style={{position:'relative',paddingTop:'56.25%'}}>
          <iframe
            src="https://www.youtube.com/embed/wUUyRRhMk9Q?rel=0&modestbranding=1"
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}
          />
        </div>
      </motion.div>
    </section>
  )
}
