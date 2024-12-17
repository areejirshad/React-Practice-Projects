import React from 'react'
import Bagsummary from '../Components/Bagdetails.jsx'
import Bagitems from '../Components/Bagitems.jsx'
import { useSelector } from 'react-redux'



export default function Bag() {
  const bagItems=useSelector(store=>store.bag)
  const items=useSelector(store=>store.items)
  
  const finalItems=items.filter((item)=>{
    const itemIndex=bagItems.indexOf(item.id);
    return itemIndex>=0
  })
 

  return (
    
      <main>
      <div class="bag-page">
        <div class="bag-items-container">
          {finalItems.map((item)=>{
            return(
              <Bagitems item={item} key={item.id}/>
            )
          })}
          
        </div>
        <Bagsummary/>
      </div>
    </main>
    
  )
}
