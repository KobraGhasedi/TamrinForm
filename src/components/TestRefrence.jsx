import React, { useRef, useState } from 'react'

const TestRefrence = () => {
    
    const text=useRef()
    const ClickHandler=()=>{
       console.log(text.current.value)
    }
   
  return (
    <div>
      <input type="text" ref={text} />
      <button onClick={ClickHandler}>Click kon</button>
    </div>
  )
}

export default TestRefrence
