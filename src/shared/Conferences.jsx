import React from 'react';

import siggraphPhoto from '../assets/siggraph-photo-3.jpeg'
import ubicompPhoto from '../assets/ubicomp-photo-169.jpg'
import ahs from '../assets/ahs-1.jpeg'
import chiphoto from '../assets/chiphoto2.jpg'
import visphoto from '../assets/visphoto.jpg'
import folphoto from '../assets/fol2.jpeg'
import icmlphoto from '../assets/icml.jpeg'


export default function Conferences() {
  return (
    <section className="section" id="conferences">
      <h2>Attended Conferences</h2>
      <ul className="pub-list">

        <li className="pub-item">
          <img className="pub-img" src={chiphoto} alt="CHI2025"/>
          <div className="pub-text">
            <h3>ACM CHI 2025</h3>
            <p>📍 Yokohama, Japan 🇯🇵</p>
            <p style={{marginTop:20}}>✨ My very first conference AND my first poster presentation at CHI! Great to connect with other researchers, sharing my work and learning from theirs.</p>
          </div>
        </li>

        <li className="pub-item">
          <img className="pub-img" src={siggraphPhoto} alt="SIGGRAPH"/>
          <div className="pub-text">
            <h3>ACM SIGGRAPH 2025</h3>
            <p>📍 Vancouver, Canada 🇨🇦</p>
            <p style={{marginTop:20}}>✨ The live demos were absolutely thrilling, and I was deeply inspired by the animation, graphics, and promotional showcases. Maybe I will present on that stage some day!</p>
          </div>
        </li>


        <li className="pub-item">
          <img className="pub-img" src={ubicompPhoto} alt="UbiComp"/>
          <div className="pub-text">
            <h3>ACM UbiComp / ISWC 2025</h3>
            <p>📍 Espoo, Finland 🇫🇮</p>
            <p style={{marginTop:20}}>✨ UbiComp / ISWC 2025 in Finland 🇫🇮 — an inspiring week of ideas, community, and creativity in ubiquitous computing.</p>
            <a href="https://www.linkedin.com/posts/jaeryungchung_ubicomp2025-helsinki-researchcommunity-activity-7385917855831113728-f_99?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnbGL4B99IuXFmtCf0coHCANyTK_ASSqDc" target="_blank">Video</a>
          </div>
        </li>

        <li className="pub-item">
          <img className="pub-img" src={visphoto} alt="VIS"/>
          <div className="pub-text">
            <h3>IEEE VIS 2025</h3>
            <p>📍 Vienna, Austria 🇦🇹</p>
            <p style={{marginTop:20}}>✨ This conference opportunity made me want to publish my own research paper so that I can present and also engage in real Q&A sessions with other researchers.</p>
          </div>
        </li>

        <li className="pub-item">
          <img className="pub-img" src={ahs} alt="Augmented Humans conference"/>
          <div className="pub-text">
            <h3>ACM Augmented Humans International Conference 2026</h3>
            <p>📍 Okinawa, Japan 🇨🇦</p>
            <p style={{marginTop:20}}>✨ Served as a student volunteer (SV), and honestly I can't cherish the moment more. </p>
            <a href="https://www.linkedin.com/posts/jaeryungchung_by-some-wonderful-coincidence-a-dozen-ugcPost-7443688058689839105-tq4n/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnbGL4B99IuXFmtCf0coHCANyTK_ASSqDc" target="_blank">Post</a>
          </div>
        </li>

        <li className="pub-item">
          <img className="pub-img" src={folphoto} alt="Festival of Learning"/>
          <div className="pub-text">
            <h3>Festival of Learning 2026 (Workshop Only)</h3>
            <p>📍 Seoul, South Korea 🇰🇷 </p>
            {/* <a href="https://festival-of-learning-2026.info/" target="_blank" rel="noopener">🔗 FoL</a> */}
            <p style={{marginTop:20}}>✨ With my interest in creativity support for children, I naturally was drawn to learning and education. While supporting creativity was different from learning, I was able to find a lot of common ground and inspiration. It was a great opportunity to learn from experts in the field and to connect with peers who share similar interests.</p>
          </div>
        </li>

        <li className="pub-item">
          <img className="pub-img" src={icmlphoto} alt="ICML"/>
          <div className="pub-text">
            <h3>ICML 2026 (Workshop Only)</h3>
            <p>📍 Seoul, South Korea 🇰🇷 </p>
            {/* <a href="https://icml.cc/virtual/2026/events/workshop" target="_blank" rel="noopener">🔗 ICML</a> */}
            <p style={{marginTop:20}}>✨ I was there mainly for the workshop 'Workshop on Human-AI Co-Creativity: Advances, Opportunities, and Challenges' and for the poster sessions (massive!). Felt that HCI community and machine learning community really compensate for each other. And I had the earge to develop my technical skills for better research.</p>
          </div>
        </li>

        </ul>
    </section>
  )
}