import React from 'react';

import siggraphPhoto from '../assets/siggraph-photo-3.jpeg'
import ubicompPhoto from '../assets/ubicomp-photo.jpg'
import ahs from '../assets/ahs-1.jpeg'


export default function Conferences() {
  return (
    <section className="section" id="conferences">
      <h2>Attended Conferences</h2>
      <ul className="pub-list">

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
          <img className="pub-img" src={ahs} alt="Augmented Humans conference"/>
          <div className="pub-text">
            <h3>ACM Augmented Humans International Conference 2026</h3>
            <p>📍 Okinawa, Japan 🇨🇦</p>
            <p style={{marginTop:20}}>✨ Served as a student volunteer (SV), and honestly I can't cherish the moment more. </p>
            <a href="https://www.linkedin.com/posts/jaeryungchung_by-some-wonderful-coincidence-a-dozen-ugcPost-7443688058689839105-tq4n/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnbGL4B99IuXFmtCf0coHCANyTK_ASSqDc" target="_blank">Post</a>
          </div>
        </li>


        </ul>
    </section>
  )
}