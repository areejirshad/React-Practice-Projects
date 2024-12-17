import React, { useContext, useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Postlist } from '../Source/store';

export default function Createpost() {
  const{addpost}=useContext(Postlist)
  const userIdElement=useRef();
  const titleElement=useRef();
  const bodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();
  const handlesubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const posttitle=titleElement.current.value;
    const postbody=bodyElement.current.value;
    const postreactions=reactionsElement.current.value;
    const posttags=tagsElement.current.value.split(" ");
    userIdElement.current.value=''
    titleElement.current.value=''
    bodyElement.current.value=''
    reactionsElement.current.value=''
    tagsElement.current.value=''
    addpost(userId,posttitle,postbody,postreactions,posttags);
    
  }
  return (
    <div>
    <Form className='container m-4' style={{width:'60%'}} onSubmit={handlesubmit}>
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">
   Enter Your user-Id
  </label>
  <input
    type="text"
    className="form-control"
    ref={userIdElement}
    placeholder="Your user-Id here"
  />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">
   Enter Your Post title here
  </label>
  <input
    type="text"
    className="form-control"
    ref={titleElement}
    placeholder="How are you feeling today"
  />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">
    Tell Us More about it
  </label>
  <textarea
    className="form-control"
    ref={bodyElement}
    rows="2"
  ></textarea>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">
   Reactions of post
  </label>
  <input
    type="Number"
    className="form-control"
    ref={reactionsElement}
    placeholder="This post is reacted by how many members"
  />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">
   Tags of post
  </label>
  <input
    type="text"
    className="form-control"
    
    ref={tagsElement}
    
  />
</div>
<Button type='submit'>Post</Button>
</Form>

    </div>
  )
}
