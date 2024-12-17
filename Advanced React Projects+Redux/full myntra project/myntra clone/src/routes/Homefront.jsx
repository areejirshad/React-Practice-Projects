import React from 'react'
import Home from '../Components/Homeitems'
import { useSelector } from 'react-redux';

export default function Homefront() {
 const items=useSelector(store=>store.items)
  return (
   <>
  <main>
    <div class="items-container">
      {items.map((item=>
        <Home item={item}/>
      ))}
      
    </div>
  </main>
   </>
  )
}
