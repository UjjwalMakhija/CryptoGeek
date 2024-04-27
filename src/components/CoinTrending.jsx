import React from 'react'

function CoinTrending({coin}) {
    console.log(coin);
  return (
    <> 
     <div className="font-light mb-2 p-2 border-gray-200 border-2 rounded hover:bg-gray-200">{coin.name}</div>
     </>
  
  )
}

export default CoinTrending