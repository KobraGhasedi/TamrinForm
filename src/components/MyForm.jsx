import React, { useState } from 'react'

const MyForm = () => {
  const [myFormData, setMyFormData] = useState({type:'',price:0})
  const submitHandler=(e)=>{
      e.preventDefault();
      console.log(myFormData)
     
  }
  const typeChangeHandler=(e)=>{
     setMyFormData({...myFormData,type:e.target.value})
  }
  const priceChangeHandler=(e)=>{
     setMyFormData({...myFormData,price:e.target.value})
  }
  return (
    <div>
      
      <form className='frmAdd' onSubmit={submitHandler}>
        <input className='inputbox' type="text" placeholder='cost type' onChange={typeChangeHandler}/>
        <input className='inputbox' type="number" placeholder='cost price' onChange={priceChangeHandler} />
        <button className='btnadd'>Add</button>
      </form>
    </div>
  )
}

export default MyForm
