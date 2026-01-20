import React, {useState, useRef} from 'react'
import profile1 from '../assets/profile/profile-1.jpg'
import profile2 from '../assets/profile/profile-2.jpg'
import profile3 from '../assets/profile/profile-3.jpg'
import profile4 from '../assets/profile/profile-4.jpg'
import profile5 from '../assets/profile/profile-5.jpg'
import profile6 from '../assets/profile/profile-6.jpg'
import profile7 from '../assets/profile/profile-7.jpg'
import profile8 from '../assets/profile/profile-8.jpg'
import profile9 from '../assets/profile/profile-9.jpg'


const IMAGES = [profile1, profile2, profile3, profile4, profile5, profile6, profile7, profile8, profile9]

// 각 이미지에 대응하는 색상
const COLORS = [
  '#6ba3d9', // profile1
  '#a36bd9', // profile2
  '#65b1c6ff', // profile3
  '#d9a36b', // profile4
  '#a36bd9', // profile5
  '#a09494ff', // profile6
  '#324353ff', // profile7
  '#6bc57bff', // profile8
  '#ff9d76ff'  // profile9
]

export default function Profile(){
  const [idx,setIdx] = useState(0)
  const hoverRef = useRef(false)

  function next(){
    setIdx((i)=> (i+1) % IMAGES.length)
  }

  return (
    <div style={{textAlign:'center'}}>
      <div style={{position:'relative', display:'inline-block'}}>
        <img
          src={IMAGES[idx]}
          alt="profile"
          className="profile-photo"
          onMouseEnter={()=>{hoverRef.current=true; next()}}
          onClick={next}
        />
        <svg 
          style={{position:'absolute', top:'-15px', left:'-15px', width:'150px', height:'150px', pointerEvents:'none'}}
          viewBox="0 0 150 150"
        >
          <defs>
            <path 
              id="circlePath" 
              d="M 75,75 m -65,0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"
              fill="none"
            />
          </defs>
          <text style={{fontSize:'12px', fontWeight:'600', fill:COLORS[idx], letterSpacing:'1.5px'}}>
            <textPath href="#circlePath" startOffset="1%">
              Tab Here!
            </textPath>
          </text>
        </svg>
      </div>
      <h2 style={{fontFamily:'Instrument Serif'}}>Jaeryung Chung</h2>
      <p style={{fontFamily:'IBM Plex Mono'}}>
        Seize the Moment,
        <span className="desktop-break"> Never Miss the Fun</span>
      </p>
      {/* <p style={{fontSize: 15, paddingTop:30, fontFamily:'Vina Sans'}}>M.S. Industrial Design, KAIST</p> */}
      {/* <p style={{fontSize: 15, fontFamily:'Vina Sans'}}>B.S. Industrial Design & School of Computing, KAIST</p> */}
    </div>
  )
}
