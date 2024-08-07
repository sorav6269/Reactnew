import React, { useState } from 'react'

function Usestate2() {
 const [count, Setcount] = useState(100)
 const [data , Setdata] = useState({
    name:'sorav',
    city:'Gwalior',
    Phone:4597694585
 })
 console.log('render')
    return (
<>
<h1>Count:{count}</h1>
<h1>Name:{data.name} city:{data.city} phone:{data.Phone}</h1>
<button onClick={()=>Setcount(count+1)}>Update data</button>
</>
  )
}

export default Usestate2