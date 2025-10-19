import React from 'react'
import whPoster from '../assets/wh-poster.jpg'
import gcgImage from '../assets/GCG.png'
import siggraphPhoto from '../assets/siggraph-photo-3.jpeg'
import ubicompPhoto from '../assets/ubicomp-photo.jpg'

export default function Publications(){
  return (
    <section className="section" id="publications">
      <h2>Publications & Conferences</h2>
      <ul className="pub-list">
        <li className="pub-item">
          <img className="pub-img" src={whPoster} alt="WrightHere poster"/>
          <div className="pub-text">
            <h3>ACM SIGCHI 2025 LBW</h3>
            <p>📍 Yokohama, Japan 🇯🇵</p>
              <p><strong>WrightHere: Supporting Children's Creative Writing with AI-Infused Interactive 3D Environment.</strong></p>
              <p><strong><em>Jaeryung Chung</em></strong>, Seon Gyeom Kim, Tak Yeon Lee. </p>
              
              <a href="https://dl.acm.org/doi/10.1145/3706599.3719932" target="_blank">DOI</a>
              <a href="https://youtu.be/KyVi9_0TCCE" target="_blank" rel="noopener">Presentation Video (ACM)</a>
              <div style={{marginTop:8}}>
                <strong>Abstract</strong>
                <p>
                  WrightHere is a generative AI-infused writing system that generates interactive 3D environments of the written story where users can explore, interact with characters, and gather inspiration to facilitate their creative writing. While creative writing is crucial for child development, it poses a unique challenge and sets a high hurdle for children. Building upon past research of providing effective stimuli for new inspiration, we explore how AI-infused interactive 3D scenes of stories can spark creativity and help children maintain their writing momentum. Through user studies with the WrightHere system, we examined how this integration of AI-generated 3D environments with writing interfaces enhances engagement and writing output. This work presents WrightHere as a novel prototype exploring the potential of generative AI and interactive 3D environments in supporting children’s creative writing process.
                </p>
              </div>
          </div>
        </li>

        <li className="pub-item">
          <img className="pub-img" src={gcgImage} alt="GCG"/>
          <div className="pub-text">
            <h3>IEEE VIS 2025</h3>
            <p>📍 Vienna, Austria 🇦🇹 See You Soon in November! </p>
            <p><strong>Grounded Generation of Embellished Bar Chart Ensuring Chart Integrity</strong></p>
            <p>Seon Gyeom Kim, Jae Young Choi, Phillip Y. Lee, <strong><em>Jaeryung Chung</em></strong>, Ryan Rossi, Jihyung Kil, Eunyee Koh, and Tak Yeon Lee. </p>
            <a href="https://groundedchartgeneration.github.io/" target="_blank">Project</a>
          
          </div>
        </li>

        <li className="pub-item">
          <img className="pub-img" src={siggraphPhoto} alt="SIGGRAPH"/>
          <div className="pub-text">
            <h3>ACM SIGGRAPH 2025</h3>
            <p>📍 Vancouver, Canada 🇨🇦</p>
            <p>Attendee</p>
          </div>
        </li>

        <li className="pub-item">
          <img className="pub-img" src={ubicompPhoto} alt="UbiComp"/>
          <div className="pub-text">
            <h3>ACM UbiComp / ISWC 2025</h3>
            <p>📍 Espoo, Finland 🇫🇮</p>
            <p>Attendee</p>
          </div>
        </li>
      </ul>
    </section>
  )
}
