import React from 'react'

function UpdateData() {
  // const updatedata=()=>alert(hello)
  let data = "Saurav RAthor"

  function updatedata(){
    data = "ram"
    alert(data)
  }
console.log('render company')
  return (
    <>
    <h1>Company Name: {data}</h1>
    <button onClick={updatedata}>Update data</button>
    </>
    
  )
}

export default UpdateData