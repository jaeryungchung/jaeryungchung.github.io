import React from 'react'
import cvPdf from '../assets/cv-20251011.pdf'

export default function Contact(){
  return (
    <section className="section" id="contact">
      <h2>Contact</h2>
      <p>Coffee Chat: <a href="https://calendar.app.google/zZtDZt9csPbR6SXp8" target="_blank">Schedule</a></p>
      <p>Email: <a href="mailto:jhyun513@kaist.ac.kr">jhyun513@kaist.ac.kr</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/jaeryungchung" target="_blank">linkedin.com/in/jaeryungchung</a></p>
      {/* <p>CV: <a href={cvPdf} target="_blank">Download</a></p> */}
    </section>
  )
}
