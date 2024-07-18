import React from 'react'
import { currencyFormat } from '../utils/utils';
import { Nochange, TrendingDown, TrendingUp } from './icons/icons';
import { Link } from 'react-router-dom';
function Coin({coin}) {
  console.log(coin);
  const PercentageChange = coin.price_change_percentage_24h;
 
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className='grid grid-cols-3 mb-4 sm:grid-cols-4 font-light p-2 rounded items-center border-gray-200 border hover:bg-violet-700 text-white dark:bg-[#202121] dark:border-gray-700'>
        <div  className='flex items-center gap-1 w-full'>
         <img className='w-6 ' src={coin.image} alt={coin.name} />
         <p className='font-semibold'>{coin.name}</p>
         <span className='text-xs'>({coin.symbol})</span>
        </div>
        <span className='font-semibold'>{currencyFormat(coin.current_price)}</span>
       
        <span className={`flex gap-1 font-semibold ${PercentageChange <0 ? 'text-red-500' : 'text-green-500'}`}>
            { PercentageChange==0? <Nochange/>: PercentageChange <0 ? <TrendingDown/>: <TrendingUp/>}
            {PercentageChange}</span>
        
        <div className='hidden sm:block'>
            <p className='font-semibold '>Market Cap</p>
            <span className='font-semibold'>{currencyFormat(coin.market_cap)}</span>

        </div>
        </div>
        </Link>
  )
}

export default Coin