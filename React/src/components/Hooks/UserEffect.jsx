import React, { useState } from 'react'
import Usestate from '../Usestate'

function UserEffect() {
    const [count, setCount] = useState(0)
    const [data, setdata] = useState(100)

    const pn = ()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
      }
   
      Usestate(()=>{
    pn()
    console.log('UserEffect')
},[])
  return (
   <>
    
    <p>You clicked {count} times</p>
    <p>You data {data} times</p>
    <button onClick={()=>setCount(count+1)}> Click me</button>
    <button onClick={()=>setCount(data+1)}> Click me</button>
    </>
  )
}

export default UserEffect