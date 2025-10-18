import React from 'react'

export default function Projects(){
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className="media-block">
        <div className="media-thumb">
          <iframe src="https://www.youtube.com/embed/zOz2XIO0hb8" title="CrossingOver" frameBorder="0" allowFullScreen />
        </div>
        <div className="media-text">
          <h3>CrossingOver — KAIST Industrial Design Exhibition</h3>
          <p>Innovation and Boundaries. A student exhibition exploring how designers break and reframe boundaries to find new value and drive innovation.</p>
          <p><a href="https://design.co.kr/young-student/105407" target="_blank">Design+ Online Archive</a></p>
        </div>
      </div>

      <div className="media-block">
        <div className="media-thumb">
          <iframe src="https://www.youtube.com/embed/b0fSv8FtrU4" title="SEAhab" frameBorder="0" allowFullScreen />
        </div>
        <div className="media-text">
          <h3>SEAhab</h3>
          <p>System design for accessible, personalized rehabilitation with community and real-time intervention.</p>
          <p><a href="/src/assets/SEAhab.pdf" target="_blank">Project PDF</a></p>
        </div>
      </div>

      <div className="media-block">
        <div className="media-thumb">
          <img src="/src/assets/evergrow-1.png" alt="Evergrow" style={{width:'100%'}} />
        </div>
        <div className="media-text">
          <h3>Evergrow — Investment Education Service</h3>
          <p>iF Design Award winner. Evergrow empowers beginners to participate in stock management and investment, fostering financial literacy.</p>
          <p><a href="https://ifdesign.com/en/winner-ranking/project/evergrow-investment-education-service/618273" target="_blank">iF Design Award</a> • <a href="/src/assets/Evergrow.pdf" target="_blank">Project PDF</a></p>
        </div>
      </div>
    </section>
  )
}
