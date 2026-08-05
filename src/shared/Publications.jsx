import React from 'react'
import whPoster from '../assets/wh-poster.jpg'
import gcgImage from '../assets/GCG.png'
import siggraphPhoto from '../assets/siggraph-photo-3.jpeg'
import ubicompPhoto from '../assets/ubicomp-photo.jpg'
// import vispaper from '../assets/vis25b-sub1326-cam.pdf'
import ahs from '../assets/ahs-1.jpeg'
import whteaser from '../assets/teaser.png'
import har from '../assets/har-1.jpeg'

export default function Publications(){
  return (
    <section className="section" id="publications">
      <h2>Publications</h2>
      <ul className="pub-list">
        <li className="pub-item">
          <img className="pub-img" src={whPoster} alt="WrightHere poster"/>
          <div className="pub-text">
            <h3>ACM CHI 2025 Late-Breaking Work</h3>
            {/* <p>📍 Yokohama, Japan 🇯🇵</p> */}
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
            {/* <p>📍 Vienna, Austria 🇦🇹 </p> */}
            <p><strong>Grounded Generation of Embellished Bar Chart Ensuring Chart Integrity</strong></p>
            <p>Seon Gyeom Kim, Jae Young Choi, Phillip Y. Lee, <strong><em>Jaeryung Chung</em></strong>, Ryan Rossi, Jihyung Kil, Eunyee Koh, and Tak Yeon Lee. </p>
            <p><a href="https://ieeexplore.ieee.org/document/11298836" target="_blank">DOI</a></p>
            <a href="https://groundedchartgeneration.github.io/" target="_blank">Project</a>
          
          </div>
        </li>

        <li className="pub-item">
          <img className="pub-img" src={har} alt="har"/>
          <div className="pub-text">
            <h3>IEEE PacificVis 2026</h3>
            {/* <p>📍 Vancouver, Canada 🇨🇦</p> */}
            <p><strong>Evaluating Visual Prompts with Eye-Tracking Data for MLLM-Based Human Activity Recognition</strong></p>
            <p>Jae Young Choi, Seon Gyeom Kim, Hyungjun Yoon, Taeckyung Lee, Donggun Lee, <strong><em>Jaeryung Chung</em></strong>, Jihyung Kil, Ryan Rossi, Sung-Ju Lee, and Tak Yeon Lee.</p>
            <p><a href="https://ieeexplore.ieee.org/document/11559130" target="_blank">DOI</a></p>
            <a href="https://eyetrackingvisualprompts.github.io/" target="_blank">Project</a>
          </div>
        </li>





      </ul>
    </section>
  )
}
