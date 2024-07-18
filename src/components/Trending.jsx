import React, { useState } from 'react'
import useAxios from '../hooks/useAxios'
import CoinTrending from './CoinTrending';

function Trending() {
    const {response} = useAxios('search/trending');

  return (
    <div className='mt-8'>
         

        {response && response.coins.map(coin => <CoinTrending key = {coin.item.coin_id} coin={coin.item}/>)}
        </div>
  )
}

export default Trending