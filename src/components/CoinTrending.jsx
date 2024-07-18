import React from 'react'


function CoinTrending({coin}) {
    console.log(coin);
    console.log(coin.data.total_volume);
  return (
    <> 
     {/* <div className="font-light mb-2 p-2 border-gray-200 border-2 rounded hover:bg-gray-800 hover:text-white flex items-center " >
        <div className='flex items-center gap-1'>
            <span className='font-semibold  '> {coin.score +1}.</span>
            <img  className='w-6'   src={coin.small} alt={coin.name} />
            <p className='font-semibold'> {coin.name}</p>
            <small className='font-medium m-2'>({coin.symbol})</small>
        </div>
         
        
        </div> */}
       

<div class={` group w-full p-4 bg-white border border-slate-400 hover:text-white ${ (coin.score)%2==0?'hover:bg-violet-700':'hover:bg-indigo-700'} rounded-lg shadow sm:p-8 dark:bg-[#202121] dark:border-gray-700 mb-4`}>
    <div class="flex items-center hover:text-white justify-between mb-2">
    
    <div className='flex pl-10 gap-10 items-center min-w-3/12 w-3/12 max-w-5/12'>
    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">{coin.score +1}</h5>
    <div className='flex gap-3 justify-start items-center '>
    <img class="w-8 h-8 rounded-full" src={coin.small} alt={coin.name}/>
    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {coin.name}
                        </p>
    </div>
    </div>
    <div className=''>
    <p class="text-sm text-gray-500 truncate dark:text-gray-400 w-44 text-center">
                        {coin.symbol}
                        </p>
    </div>
   
    <div class="inline-flex gap-5 pr-5 w-5/12 items-center justify-between text-base text-left font-semibold text-white ">
                   $ {coin.data.price}
                    <a href="#" class=" group-hover:text-white text-sm font-medium text-sky-400 ">
           Explore more
        </a>
</div>
   </div>
</div>

     </>
  
  )
}

export default CoinTrending