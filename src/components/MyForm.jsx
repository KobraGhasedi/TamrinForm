import React, { useState } from 'react'
import TestCssProblem from './TestCssProblem';
import styles from './MyForm.module.css'
const MyForm = ({a}) => {
  const [myFormData, setMyFormData] = useState({type:'',price:0})

  const submitHandler=(e)=>{
      e.preventDefault();
      a(myFormData)
      setMyFormData({type:'',price:0})
     
  }
  const typeChangeHandler=(e)=>{
     setMyFormData({...myFormData,type:e.target.value})
  }
  const priceChangeHandler=(e)=>{
     setMyFormData({...myFormData,price:e.target.value})
  }
  return (
    <div>
        <form className={`${styles.c1}`} onSubmit={submitHandler}>
        <input className='inputbox' type="text" placeholder='cost type' onChange={typeChangeHandler} value={myFormData.type}/>
        <input className='inputbox' type="number" placeholder='cost price' onChange={priceChangeHandler} value={myFormData.price}/>
        <button className='btnadd'>Add</button>
        <div className={`${styles.c1} , ${styles.c2-1}`}>hksdhfkshd</div>
        </form>
      <TestCssProblem/>
    </div>
  )
}

export default MyForm
