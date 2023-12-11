import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cost from './components/Cost';
import Counter from './components/Counter';
import MyForm from './components/MyForm';

function App() {
 const allCosts=[
  {id:1, type:'laptop',price:1200000},
  {id:2, type:'mobil',price:20000},
  {id:3, type:'tablet',price:30000},
 ];
 
  return (
     <div>
        <MyForm/>
        {
        allCosts.map((item,index)=>{
       return  <Cost key={item.id} data={item}/>
        })
        }
       </div>
  )
}

export default App
