import React from 'react'

import '../index.css'
function CssStyling() {
    const boxcss={
        color:"red",
        margin:"50px"
    }
  return (
    <>
    <h1 className='a'>css style</h1>

    <h1 style={{color:"red",backgroundColor:'yellow'}}> Sorav</h1>
<h3 style={boxcss}> Pankaj</h3>
    </>
  )
}

export default CssStyling