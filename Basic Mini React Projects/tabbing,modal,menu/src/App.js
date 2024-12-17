
// import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { data } from './questions';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFaceFlushed } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { tabsData } from './tabs';



function App() {
 
  // let[menustatus,setMenustatus]=useState(false);
  // let[modalstatus,setModalstatus]=useState(false);
  let[activetab,setActivetab]=useState(0);
  let[activecontent,setActivecontent]=useState(tabsData[0])
  let changeData=(index)=>{
    
      setActivetab(index)
      setActivecontent(tabsData[index])
  }
  
  return (
  <div className="App">
    <div className='tabsOuter' style={{textAlign:'center'}}>
      <h1 style={{textAlign:'center', marginTop:'120px', marginBottom:'20px', fontFamily:'initial'}}>Law and mission of Our Innstitute</h1>
      
      <ul>
        {
          tabsData.map((itemData,index)=>{
            return(
             
            <li key={index}>
              
              <button className={activetab===index?'activebutton':''} onClick={()=>changeData(index)}>{itemData.title}</button>
              </li>
            )
          })
          
        }
       
        </ul>
        {
          activecontent!==undefined ?
          <p style={{textAlign:'center',marginRight:'30px', marginLeft:'30px', fontFamily:'-moz-initial!important'}}>
          {activecontent.description}
        </p>:
        ''
        }
        
          
        
      
          
      
    </div>
    
    {/* <div className='res'>
    <button className='micon'onClick={()=>setMenustatus(!menustatus)}>{
      menustatus?<span>&times;</span>:<span>&#9776;</span>
      }</button>
    <div className={`menu ${menustatus?'activemenu':""}`}>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Course</li>
        <li>Gallery</li>
        <li>Contact Us</li>
      </ul>
      </div>
    </div> */}
    {/* <button className='btn' onClick={()=>setModalstatus(true)}>Enquiry Now</button>
   <div className={`modalOverlay ${modalstatus?'showOverlay':''}`} onClick={()=>setModalstatus(false)}>
     <div className={`modalDiv ${modalstatus?'showmodalDiv':''}`}>
      
      <h2>Enquiry Now <span onClick={()=>setModalstatus(false)}>&times;</span></h2>
     </div>
   </div> */}
    
  </div>
  );
}
// function ProductItems({items}) {
//     return(
      
//          <Col lg="3" md="6" className='my-5' >
//           <Card style={{ width: '18rem' }}>
      
//       <Card.Body>
//         <Card.Title>{items.title}</Card.Title>
//         <Card.Text>
//         {items.body}
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//       </Card>
//           </Col>
      
//     )
// }

export default App;
