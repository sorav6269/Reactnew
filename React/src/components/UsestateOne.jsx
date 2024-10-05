import React, { useState } from 'react'

function UsestateOne() {
    const [name, Setname]= useState('sorav')
    function updatedata(a){
        Setname(a)
      }

  return (
   <>
   <h1>Name:{name}</h1>
   <button onClick={()=>updatedata('kamal')}>Update data</button>
   </>
  )
}

export default UsestateOne