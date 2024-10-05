import React, { useState } from 'react'

function UserEffect1() {
   const[count,setCount] = useState(0)
   const [data, setdata] = useState(100)

   const pn = ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  useState(()=>{
    pn()
    console.log('hello count')
    
  },[count])

  useState(()=>{
    console.log('hello data')
    
  },[data])
    return (
    <>
    <p>You clicked {count} times</p>
    <p>You data {data} times</p>
    <button onClick={()=>setCount(count+1)}> Click me</button>
    <button onClick={()=>setCount(data+1)}> Click me</button>
    </>

  )
}

export default UserEffect1