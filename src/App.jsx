import { useId, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cost from './components/Cost';
import Counter from './components/Counter';
import MyForm from './components/MyForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
   // const id=useId()
   const [allCosts, setAllCosts] = useState([{id:1, type:'laptop',price:1200000},
   {id:2, type:'mobil',price:20000},
   {id:3, type:'tablet',price:30000},
])
  
   const addItemToList=(item)=>{
      // item.id=uuidv4()
      // item.id=id
      item.id=new Date()
      console.log(item)
      setAllCosts([...allCosts,item])
   }
    const deleteById=(id)=>{
      setAllCosts(allCosts.filter((item)=>{
         return item.id !==id
       }))
    }
  return (
     <div>
        <MyForm a={addItemToList} />
        {
        allCosts.map((item)=>{
       return  <Cost key={item.id} data={item} deleteById={deleteById}/>
        })
        }
       </div>
  )
}

export default App
