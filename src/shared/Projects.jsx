import React from 'react'
import evergrowImage from '../assets/evergrow-1.png'
import seahabPdf from '../assets/SEAhab.pdf'
import evergrowPdf from '../assets/Evergrow.pdf'

export default function Projects(){
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className="media-block">
        <div className="media-thumb">
          <iframe src="https://www.youtube.com/embed/zOz2XIO0hb8" title="CrossingOver" frameBorder="0" allowFullScreen />
        </div>
        <div className="media-text">
          <h3>CrossingOver: Innovation and Boundaries — KAIST Industrial Design Exhibition</h3>
          <p>📍 Seoul, Republic of Korea 🇰🇷</p>
          <p>Conducted exhibition at KAIST exploring how designers break and reframe boundaries to find new value and drive innovation.</p>
          <p><a href="https://design.co.kr/young-student/105407" target="_blank">Design+ Online Archive</a></p>
        </div>
      </div>

      <div className="media-block">
        <div className="media-thumb">
          <img src={evergrowImage} alt="Evergrow" style={{width:'100%'}} />
        </div>
        <div className="media-text">
          <h3>Evergrow — Investment Education Service</h3>
          <p><strong><em>Jaeryung Chung</em></strong>, Jamie Ashley Dee, Minseo Bang, Zofia Marciniak, Eunseo Oh, Hyeonjeong Im, Sunok Lee, Sangsu Lee. </p>
          <p>iF Design Award winner. Evergrow empowers beginners to participate in stock management and investment, fostering financial literacy.</p>
          <p><a href="https://ifdesign.com/en/winner-ranking/project/evergrow-investment-education-service/618273" target="_blank">iF Design Award</a> • <a href={evergrowPdf} target="_blank">Project PDF</a></p>
        </div>
      </div>

      <div className="media-block">
        <div className="media-thumb">
          <iframe src="https://www.youtube.com/embed/b0fSv8FtrU4" title="SEAhab" frameBorder="0" allowFullScreen />
        </div>
        <div className="media-text">
          <h3>SEAhab: Welcoming Virtual Rehab Community for Drug Users</h3>
          <p><strong><em>Jaeryung Chung</em></strong>, Donggun Lee, Sohwi Son, Maida Aizaz, Yujin Kwon, Tak Yeon Lee. </p>
          <p>System design for accessible, personalized rehabilitation with community and real-time intervention.</p>
          <p><a href={seahabPdf} target="_blank">Project PDF</a></p>
        </div>
      </div>
    </section>
  )
}
