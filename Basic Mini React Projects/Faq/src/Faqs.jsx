import React, { useState } from 'react'
import { questions } from './quetions';

export default function Faqs() {
  let [currentid,setCurrentid]=useState(questions[0].qno)
  let items=questions.map((itemdata,i)=>{
    let itemdetails={
        itemdata,
        currentid,
        setCurrentid
    }
    return(
        <FaqItems itemdetails={itemdetails} key={i}/> 
    )
  }) 
  return (
    <div>
        <div className='hmain'><h1>Frequently Asked Questions(Faqs)</h1></div>
        <div className='faqouter'>
           {items}
        </div>
    </div>
  )
}


function FaqItems({itemdetails}) {
    let {itemdata,currentid,setCurrentid}=itemdetails;
  return (
    <div className='faqItems'>
      <h2 onClick={() => setCurrentid(currentid === itemdata.qno ? null : itemdata.qno)}>{itemdata.question}</h2>
      <p className={currentid===itemdata.qno?"activeAns":""}>{itemdata.answer}</p>
    </div>
  )
}

