import React from 'react'
import cv from '../assets/CV_JaeryungChung_20250218.pdf'
import portfolio from '../assets/JaeryungChung_portfolio_0120_.pdf'

export default function Contact(){
  return (
    <section className="section" id="contact">
      <h2>Contact</h2>
      <p><a href="https://calendar.app.google/zZtDZt9csPbR6SXp8" target="_blank">Coffee Chat Google Calendar</a></p>
      <p><a href="https://www.linkedin.com/in/jaeryungchung" target="_blank">LinkedIn</a></p>
      <p><a href=" https://scholar.google.com/citations?user=tQlsqHEAAAAJ&hl=ko" target="_blank">Google Scholar</a></p>
      <p><a href="mailto:jhyun513@kaist.ac.kr">jhyun513@kaist.ac.kr</a></p>
      {/* <p>-</p> */}
      {/* <p style={{marginTop: '1.5rem'}} */}
      {/* <p style={{marginTop: '1.5rem'}} ><a href={cv} target="_blank" className="document-link">CV PDF</a></p>
      <p><a href={portfolio} target="_blank" className="document-link">Portfolio PDF</a></p> */}
      {/* <p>CV: <a href={cvPdf} target="_blank">Download</a></p> */}
    </section>
  )
}
