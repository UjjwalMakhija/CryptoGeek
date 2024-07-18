
import React from 'react'
import HistoryChart from '../HistoryChart'
import CoinDetail from '../CoinDetail'

function Cryptodetail() {
  return (
    <div className=' wrapper-container mt-10 text-white'>
      <HistoryChart/>
      <CoinDetail/>
    </div>
  )
}

export default Cryptodetail