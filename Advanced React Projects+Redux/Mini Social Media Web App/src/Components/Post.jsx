import React, { useContext } from 'react'
import { Postlist } from '../Source/store'
import { MdAutoDelete } from "react-icons/md";


export default function Post({postdata}) {
  const{deletepost}=useContext(Postlist)
 
  return (
    <div>
  <div className="card m-4" style={{ width: "30rem" }} >
  <div className="card-body">
    <h5 className="card-title">{postdata.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletepost(postdata.id)} style={{cursor:'pointer'}}>
    <MdAutoDelete />
    </span>
    </h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{`This post is being reacted by ${postdata.reactions} People`}</h6>
    <p className="card-text">
    {postdata.body}
    </p>
    {postdata.tags.map((tag,i)=>{
      return(
        <span className="badge text-bg-primary ms-1" key={i}>{tag}</span>
      )
    })}
    
    
  </div>
</div>

    </div>
  )
}
