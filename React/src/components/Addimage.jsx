import React from 'react'
import img from '../../src/image/sor.jpg'
import img1 from '../../src/image/thinking.png'
function Addimage() {
  return (
    <>
    <img src={img} alt="" style={{width:'400px',height:'400px',justifyContent:'center'}} />
    <img src={img1} alt="" />
  </>
  )
}

export default Addimage