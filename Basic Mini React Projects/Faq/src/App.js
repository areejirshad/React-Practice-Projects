
// import { Col, Container, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import Faqs from './Faqs';
// import { questions } from './quetions';
// import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';
// // import { data } from './questions';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faFaceFlushed } from '@fortawesome/free-regular-svg-icons';
// import { useState } from 'react';



function App() {
//  let[showAns,setshowAns]=useState(questions[0].qno);
 
  return (
  <div className="App">
  <div>
    <Faqs/>
    {/* <div className='hmain'><h1>Frequently Asked Questions(Faqs)</h1></div>
    <div className='faqouter'>
      {
      questions.map((items,i)=>{
        return(
          <div className='faqItems'>
          <h2 onClick={() => setshowAns(showAns === items.qno ? null : items.qno)} key={i}>{items.question}<span><FontAwesomeIcon icon={faArrowAltCircleDown}/></span></h2>
          <p className={showAns==items.qno?"activeAns":""}>{items.answer}</p>
        </div>
        )
      })
      }
      
      
    </div> */}
  </div>
    
    
    
  </div>
  );
}

export default App;
