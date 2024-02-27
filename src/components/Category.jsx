// import React from 'react'

// eslint-disable-next-line react/prop-types
const Category = ({name='Zeeshan'}) => {
  return (
    <div style={{background:'#ffff',display:'flex',width:'140px',height:'36px',alignItems:'center',justifyContent:'center',borderRadius:'12px',fontSize:'13px',fontWeight:'400',color:'#4B5665',cursor:'pointer',margin:'0.5rem 0'}}>
      {name}
    </div>
  )
}

export default Category
