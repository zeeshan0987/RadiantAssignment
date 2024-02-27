// import React from 'react'

const Tag = ({icon,name}) => {
  return (
    <div style={{width:'125px',height:'34px',borderRadius:'0 8px 8px 0',background:'#FF7724',display:'flex',alignItems:'center',justifyContent:'center',gap:'0.5rem'}}>
        <img style={{width:'20px',height:'20px'}} src={icon} alt="icon" />
      <p style={{fontWeight:'400',fontSize:'16px',color:'#ffff'}}>{name}</p>
    </div>
  )
}

export default Tag
