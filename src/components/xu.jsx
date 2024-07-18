import React, { useEffect, useState } from 'react'

function Xu() {
    const [timer,setTimer] = useState(0)
    useEffect(()=>{
      console.log("Mounting");
      const time = setInterval(()=> setTimer(timer+1),2000)
      return function(){
        console.log("remounting");
        clearInterval(time)
      }
},[timer])
  return (
    <div>
        <div className='flex justify-center items-center flex-col'>
      <h1>Timer</h1>
      <p>The current time is {timer}</p>

    </div>
    </div>
  )
}

export default Xu