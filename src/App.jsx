import React, { useEffect, useState } from 'react'
import Second from './Second'
import Xu from './components/xu';
import Cryptohome from './components/pages/Cryptohome';
function App() {
  // let [a,b]=useState(20)
  return (
   
    
    
    <div className='w-full h-full bg-zinc-900 items-center flex flex-col justify-center'>
  <Cryptohome/>
  {/* //     <div className='w-44 h-32 rounded-xl bg-cyan-300 p-5 flex flex-col font-bold justify-center items-center'>
  //     <h1 className={`${a==0 ? 'text-white': a>0 ? 'text-green-700':'text-red-600'}`}> {a} </h1>
  //     <button onClick={()=>b(a+1)} className='bg-black w-28 h-10 rounded-md text-white'>Increment</button>
  //     <button onClick={()=>b(a-1)} className='bg-black w-28 h-10 rounded-md text-white mt-2.5'>Decrement</button>
  //     <button onClick={()=>b(0)} className='bg-black w-28 h-10 rounded-md text-white mt-2.5'>Reset</button>
  //     </div>
  //     <Second a={a} /> */}
     </div>
      
      
   )
 

   
  // useEffect(() => {
  //   console.log("App mounting");
  // })
  // return (
  //   <div>
  //     <Xu />
  //   </div>
  // )
}

export default App