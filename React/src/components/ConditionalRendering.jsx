import React from 'react'


const Myfun =()=>{
    let age = 30;
    if(age>=18)
{    

return (
    <>
     <h1>Hello{result}</h1>
    </>
)
}else{
return (
    <>
     <h1>Hello{result}</h1>
    </>
)
}
}

function ConditionalRendering() {
    let age = 30;
    let result;
    if (age > 18) {
        result = <h1>You can vote</h1>
    } else {
        result = <h1>You can't vote</h1>
    }

    return (
      <>
        <h1>Hello{result}</h1>

    {/* ternary oprator */}

    <div>
       {
        age>18 ?<h1>Eligible for vote</h1>
        : <h1> Not Eligible for vote</h1>
       } 
    </div>
    </>
    )
}

export default ConditionalRendering