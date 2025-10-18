import React, {useState, useRef} from 'react'

const IMAGES = Array.from({length:6}).map((_,i)=>`/src/assets/profile/profile-${i+1}.jpg`)

export default function Profile(){
  const [idx,setIdx] = useState(0)
  const hoverRef = useRef(false)

  function next(){
    setIdx((i)=> (i+1) % IMAGES.length)
  }

  return (
    <div style={{textAlign:'center'}}>
      <img
        src={IMAGES[idx]}
        alt="profile"
        className="profile-photo"
        onMouseEnter={()=>{hoverRef.current=true; next()}}
        onClick={next}
      />
      <h2 style={{fontFamily:'Instrument Serif'}}>Jaeryung Chung</h2>
      <p style={{fontFamily:'IBM Plex Mono'}}>
        Seize the Moment,
        <span className="desktop-break"> Never Miss the Fun</span>
      </p>
    </div>
  )
}
