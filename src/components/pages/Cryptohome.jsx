import React, { useState } from 'react'
import Trending from '../Trending'
import Market from '../Market'
import useAxios from '../../hooks/useAxios'

function Cryptohome() {
  const [ toggle,setToggle]=useState(true)
  const {response} = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  console.log(response)
  return (
    <div className='wrapper-container font-semibold w-full'>
     
      <div  className='flex cursor-pointer  gap-10 text-white pt-5'>
       
        <h1 onClick={()=>{setToggle(true)}} >Trending</h1>
        <h1 onClick={()=>{setToggle(false)}}>Market</h1>
      </div>
      {
        toggle ? <Trending/> : <Market response={response}/>
      }
      
     
    </div>
  )
}

export default Cryptohome