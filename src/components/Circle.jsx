// import React from 'react'

// eslint-disable-next-line react/prop-types
const Circle = ({number = 4}) => {
  return (
    <div style={{width:'44px',height:'44px',backgroundColor:'#ffff',border:'1px solid #E1E4E6', display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'100%',fontSize:'20px',fontWeight:'400'}}>
      {number}
    </div>
  )
}

export default Circle
