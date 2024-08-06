import React, { useState } from 'react'

function Usestate() {
    const [data ,setData] = useState('This is a react page')
  return (
<h1>{data}</h1>
  )
}

export default Usestate