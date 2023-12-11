import React, { useState } from 'react'
import Counter from './Counter'

const Cost = ({data}) => {
  console.log(data)
  const [myPrice,setMyPrice]=useState(data.price)
  const ClickHandler=()=>{
     setMyPrice(myPrice+1)
  }
  return (
    <div>
      <div className='items'>
        <div className='item'><span>{data.type}</span></div>
        <div className='item'><span>{myPrice}</span></div>
        <button className='btnChangePrice' onClick={()=>ClickHandler()}>Change Price</button>
        <Counter/>
        </div>
    </div>
  )
}

export default Cost
