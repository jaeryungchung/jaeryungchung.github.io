import React from 'react'
import evergrowImage from '../assets/evergrow-1.png'
import seahabPdf from '../assets/SEAhab.pdf'
import evergrowPdf from '../assets/Evergrow.pdf'
import wrighthereif from '../assets/WrightHere-v8-.pdf'
import polylingual from '../assets/polylingual.png'
import polylingualPdf from '../assets/Polylingual_Co_design_Method.pdf'
import va from '../assets/va-discussion.png'
import vaPdf from '../assets/Guess_the_Valence_and_Arousal.pdf'

export default function Projects(){
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className="media-block">
        <div className="media-thumb">
          <iframe src="https://www.youtube.com/embed/zOz2XIO0hb8" title="CrossingOver" frameBorder="0" allowFullScreen />
        </div>
        <div className="media-text">
          <h3>Crossing Over: Innovation and Boundaries — KAIST Industrial Design Exhibition</h3>
          <p>📍 Seoul, Republic of Korea 🇰🇷</p>
          <p>Conducted exhibition at KAIST exploring how designers break and reframe boundaries to find new value and drive innovation.</p>
          <p><a href="https://design.co.kr/young-student/105407" target="_blank">Design+ Online Archive</a> • <a href={wrighthereif} target="_blank">WrightHere ver2 PDF</a></p>
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

      <div className="media-block">
        <div className="media-thumb">
          <img src={va} alt="Valence and Arousal" style={{width:'100%'}} />
        </div>
        <div className="media-text">
          <h3>Guess the Valence and Arousal: Measuring Multimodal LLM Alignment with Human Emotion on Video Stimuli</h3>
          <p><strong><em>Jaeryung Chung</em></strong>, Yoonjae Oh. </p>
          <p>Understanding MLLM capability of understanding video context and judge human emotion according to personas, with the use of the Chieti Affective Action Videos (CAAV) dataset and Gemini 2.5 Flash.</p>
          <p><a href={vaPdf} target="_blank">Project PDF</a></p>
        </div>
      </div>

      <div className="media-block">
        <div className="media-thumb">
          <img src={polylingual} alt="Polylingual Co-design" style={{width:'100%'}} />
        </div>
        <div className="media-text">
          <h3>Toward Inclusion Beyond Language: Proposing the Polylingual Co-Design Method</h3>
          <p>Jeonghoon Han, <strong><em>Jaeryung Chung</em></strong>, Alida Gazzotti, Jieon Du. </p>
          <p>We introduce Polylingual Co-Design, a participatory design method enabling cross-cultural collaboration without shared language.</p>
          <p><a href={polylingualPdf} target="_blank">Project PDF</a></p>
        </div>
      </div>


    </section>
  )
}
