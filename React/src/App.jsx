import React from 'react'
import UpdateData from './components/UpdateData'
import Usestate from './components/Usestate'
import UsestateOne from './components/UsestateOne'
import Usestate2 from './components/Usestate2'
import Props from './components/Props'
import { useState } from 'react'




function App() {
  const [name, Setname]= useState('sorav')
  return ( 
<>    
    {/* <UpdateData/> 
<Usestate/> 
 <UsestateOne/>
 <Usestate2/>  */}
<Props name={name}/>
</>
  )
}

export default App
