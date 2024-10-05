import React from 'react'
import { useState } from 'react'

function UserState() {
    const [count, setCount] = useState(0)
    return (
      <>
      <p>You clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}> Click me</button>
      </>
    )
}

export default UserState