import React, { useState } from 'react'

function Usestate() {
    const [data ,setData] = useState('This is a react page') // called state
    function updatedata(){
      setData('ram')
    }
  console.log('render company')
  return (
    <><h1>{data}</h1>
    <button onClick={updatedata}>Update data</button>
    </>

  )
}

export default Usestate