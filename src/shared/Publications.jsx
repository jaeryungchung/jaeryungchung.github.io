import React from 'react'
import whPoster from '../assets/wh-poster.jpg'
import gcgImage from '../assets/GCG.png'
import siggraphPhoto from '../assets/siggraph-photo-3.jpeg'
import ubicompPhoto from '../assets/ubicomp-photo.jpg'
import vispaper from '../assets/vis25b-sub1326-cam.pdf'

export default function Publications(){
  return (
    <section className="section" id="publications">
      <h2>Publications & Conferences</h2>
      <ul className="pub-list">
        <li className="pub-item">
          <img className="pub-img" src={whPoster} alt="WrightHere poster"/>
          <div className="pub-text">
            <h3>ACM CHI 2025 Late-Breaking Work</h3>
            <p>📍 Yokohama, Japan 🇯🇵</p>
              <p><strong>WrightHere: Supporting Children's Creative Writing with AI-Infused Interactive 3D Environment</strong></p>
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
            <h3>IEEE VIS 2025 Short Paper</h3>
            <p>📍 Vienna, Austria 🇦🇹 </p>
            <p><strong>Grounded Generation of Embellished Bar Chart Ensuring Chart Integrity</strong></p>
            <p>Seon Gyeom Kim, Jae Young Choi, Phillip Y. Lee, <strong><em>Jaeryung Chung</em></strong>, Ryan Rossi, Jihyung Kil, Eunyee Koh, and Tak Yeon Lee. </p>
            <p><a href="https://ieeexplore.ieee.org/document/11298836" target="_blank">DOI</a></p>
            <a href="https://groundedchartgeneration.github.io/" target="_blank">Project</a>
          
          </div>
        </li>

        <li className="pub-item">
          <img className="pub-img" src={siggraphPhoto} alt="SIGGRAPH"/>
          <div className="pub-text">
            <h3>ACM SIGGRAPH 2025</h3>
            <p>📍 Vancouver, Canada 🇨🇦</p>
            <p style={{marginTop:20}}>✨ The live demos were absolutely thrilling, and I was deeply inspired by the animation, graphics, and promotional showcases. Maybe I’ll aim for a VR demo this year!</p>
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
      </ul>
    </section>
  )
}
