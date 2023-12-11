import React, { useState } from 'react'

const Counter = () => {
    const [Number, setNumber] = useState(0)
   const incHandler=()=>{
      setNumber(Number+1)
   }
   const decHandler=()=>{
    if(Number>0){
        setNumber(Number-1)
    }
   }
  return (
    <div>
     <div>
        <button className='btnCounter' onClick={incHandler}>+</button>
        <label className='lblCounter'>{Number}</label>
        <button className='btnCounter' onClick={decHandler}>-</button>
     </div>
    </div>
  )
}

export default Counter
