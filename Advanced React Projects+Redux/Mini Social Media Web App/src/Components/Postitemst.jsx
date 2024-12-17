import React, { useContext } from 'react'
import Post from './Post'
import {Postlist} from '../Source/store'


export default function Postlistitems() {
  const{postlist}=useContext(Postlist)
  return (
    <div>
      {postlist.map((postdata,i)=>{
        return(
          <Post postdata={postdata} key={i}/>
        )
          
        })}
      
    </div>
  )
}
