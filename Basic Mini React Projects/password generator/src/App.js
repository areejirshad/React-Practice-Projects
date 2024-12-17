

import { useState } from 'react';
import './App.css';
import { LC, NC, SC, UC } from './passData';

function App() {
   let[uppercase,setUpperCase]=useState(false)
   let[lowercase,setLowerCase]=useState(false)
   let[number,setNumber]=useState(false)
   let[symbol,setSymbol]=useState(false)
   let[passlen,setPasslen]=useState(10)
   let[fpass,setFpass]=useState('')
   let generatePassword=()=>{
    let charSet=''
    let finalPass=''
    if(uppercase||lowercase||number||symbol||symbol){
       if(uppercase)charSet+=UC
       if(lowercase)charSet+=LC
       if(number)charSet+=NC
       if(symbol)charSet+=SC
       for (let i = 0; i<passlen; i++) {
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
        
        
       }
       setFpass(finalPass)
      
    }
    else{
      alert(' Please select one checkbox')
    }
   }
   let copypaste=()=>{
    navigator.clipboard.writeText(fpass)
   }

  return (
    <div className="App">
      
         <div className='passbox'>
          <h2>Password generator App</h2>
          <div className='finalpass'>
            <input type='text' readOnly value={fpass}/>
            <button style={{cursor:'pointer'}} onClick={copypaste}>Copy</button>
          </div>
          <div className='passlength'>
            <label>Password length</label>
            <input type='number' min={5} max={30} value={passlen} onChange={(event)=>setPasslen(event.target.value)}/>
          </div>
          <div className='passlength'>
            <label>Include Upper Case letters</label>
            <input  type='checkbox' value={uppercase} onChange={()=>setUpperCase(!uppercase)}/>
          </div>
          <div className='passlength'>
            <label>Include Lower Case letters</label>
            <input  type='checkbox' value={lowercase} onChange={()=>setLowerCase(!lowercase)}/>
          </div>
          <div className='passlength'>
            <label>Include Numbers</label>
            <input  type='checkbox' value={number} onChange={()=>setNumber(!number)}/>
          </div>
          <div className='passlength'>
            <label>Include Symbols</label>
            <input  type='checkbox' value={symbol} onChange={()=>setSymbol(!symbol)}/>
          </div>
          <button className='btn' onClick={generatePassword}>Generate Password</button>
         </div>
      
    </div>
  );
}


export default App;
