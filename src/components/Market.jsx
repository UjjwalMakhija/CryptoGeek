import { useEffect, useState } from "react"
import useAxios from "../hooks/useAxios"
import Coin from "./Coin"


function Market() {
        
    const {response} = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    // const [responseReceived,setResponse]= useState(false)
    // useEffect(()=>{
    //     setResponse(true)
    // },[response])
    // if(responseReceived){

  return (
        
        <section className="mt-8">
           {response && response.map(coin=><Coin key={coin.id} coin ={coin}/>)}
        </section>
   
  )
// }else{
//     return(
//         <div className="flex justify-center items-center">
//          <p className="w-20">Loading</p>
//         </div>
       
//     )
// }
}

export default Market