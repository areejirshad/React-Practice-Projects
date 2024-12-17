
// import { Col, Container, Row } from 'react-bootstrap';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { data } from './questions';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFaceFlushed } from '@fortawesome/free-regular-svg-icons';




function App() {
 
  let[formData,setFormData]=useState({
    uname:'',
    uemail:'',
    uphone:'',
    umessage:'',
    index:''
  }
     
  )
  let getValue=(event)=>{
    let oldData={...formData}
    let inputName=event.target.name;
    let inputValue=event.target.value;
    oldData[inputName]=inputValue;
    setFormData(oldData)

  }
  let[userData,setUserData]=useState([])

  let handleSubmit=(event)=>{
    let currentUserFormData={
      uname:formData.uname,
      uemail:formData.uemail,
      uphone:formData.uphone,
      umessage:formData.umessage,
      index:formData.index
    }
    if(formData.index===''){
    let checkFilteruser=userData.filter((v)=>v.uemail==formData.uemail || v.uphone==formData.uphone)
    if(checkFilteruser.length==1){
      toast.error('Email or phone number alreaady exists')
    }
    else{
    let oldUserData=[...userData,currentUserFormData]
    setUserData(oldUserData)
    setFormData({
      uname:'',
      uemail:'',
      uphone:'',
      umessage:'',
      index:''
    })
  }}
  else{
    let editIndex=formData.index;
    let oldData=userData;
    let checkFilteruser=userData.filter((v,i)=>(v.uemail===formData.uemail || v.uphone===formData.uphone) && i!==editIndex)
    if(checkFilteruser.length==0){
    oldData[editIndex]['uname']=formData.uname;
    oldData[editIndex]['uemail']=formData.uemail;
    oldData[editIndex]['uphone']=formData.uphone;
    oldData[editIndex]['umessage']=formData.umessage;
    setUserData(oldData)
    setFormData({
      uname:'',
      uemail:'',
      uphone:'',
      umessage:'',
      index:''
    })}
    else{
      toast.error('Email or phone number alreaady exists')
    }
  }
    event.preventDefault();
  


}

let deleteRow=(index)=>{
     let filterafterDelete=userData.filter((v,i)=>i!==index)
     toast.success('Data Deleted')
     setUserData(filterafterDelete)
}
let editRow=(indexnumber)=>{
    let editData=userData.filter((v,i)=>i==indexnumber)[0]
    editData['index']=indexnumber
    setFormData(editData)
}
  return (
  <div className="App">
  <Container fluid>
    <Container>
      <ToastContainer/>
      <Row>
        <Col className='text-center my-5'>
        <h1 >Enquiry Now</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
         <form onSubmit={handleSubmit}>
           <div class="mb-3">
            <label  class="form-label" >Your name</label>
             <input type="text" class="form-control" name='uname' value={formData.uname} onChange={getValue} autoComplete="off"/>
    
            </div>
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
             <input type="email"  id="exampleInputPassword1"  class="form-control" name='uemail' value={formData.uemail} onChange={getValue} autoComplete="off"/>
    
            </div>
            <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">Phone Number</label>
              <input type="number" class="form-control" id="exampleInputPassword1" name='uphone' value={formData.uphone} onChange={getValue} autoComplete="off"/>
            </div>
            <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">Your message</label>
              <textarea class="form-control" id="exampleInputPassword1" name='umessage' value={formData.umessage} onChange={getValue}/>
            </div>
  
            <button type="submit" class="btn btn-primary">
              {
                formData.index!==""?'Update':'Save'
              }
            </button>
          </form>
        </Col>
        <Col lg={7}>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Your Name</th>
          <th>Email Adress</th>
          <th>Phone Number</th>
          <th>Your Message</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userData.length>=1?
          userData.map((obj,i)=>{
            return(
              <tr key={i}>
              <td>{i+1}</td>
              <td>{obj.uname}</td>
              <td>{obj.uemail}</td>
              <td>{obj.uphone}</td>
              <td>{obj.umessage}</td>
              <td>
                <Button onClick={()=>deleteRow(i)}>Delete</Button>
                <Button style={{marginTop:'5px'}} onClick={()=>editRow(i)}>Update</Button>
              </td>
              </tr>
            )
          })
          
         
        :
        <tr>
        <td colspan={6}>No Data Found</td>
        </tr>
        }
      
        
      </tbody>
    </Table>
        </Col>
      </Row>
    </Container>
  </Container>
  </div>
  );
}
export default App