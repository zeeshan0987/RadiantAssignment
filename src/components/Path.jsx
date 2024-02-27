// import React from 'react'
import Vector from '../assets/Vector.png'

// eslint-disable-next-line react/prop-types
const Path = ({path='Home'}) => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'start',gap:'0.5rem', margin:'0.5rem',color:'#727D87'}}>
      <div style={{fontSize:'13px',fontWeight:'400'}}>{path}</div>
      <img style={{width:'10px',height:'8.25px',color:'#5C6874'}} src={Vector} alt="" />
    </div>
  )
}

export default Path
