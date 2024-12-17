
import {createContext, useReducer } from "react";
import React from 'react'

export const Postlist=createContext({
  postlist:[],
  addpost:()=>{},
  deletepost:()=>{},
});
const DEFAULT_POST_LIST=[
  {
    id:'1',
    title:'I am feeling very good',
    body:'It is very difficult in todays world to remain happy',
    reactions:'23',
    tags:["Happy","learning"]
    
  },
  {
    id:'2',
    title:'I am feeling very sad',
    body:'I am learning react nowadays',
    reactions:'46',
    tags:["sad","learning"]
    
  },
];

const PostlistReducer=(currpostlist,action)=>{
   let newpostlist=currpostlist
   if(action.type==='DELETE_POST'){
    newpostlist=currpostlist.filter((postnum=>postnum.id!==action.payload.postId))
   }
   if(action.type==='ADD_POST'){
    newpostlist=[action.payload,...currpostlist]
   }
   return newpostlist
}
export default function PostlistProvider({children}) {
  const[postlist,dispatchpostlist]=useReducer(PostlistReducer,DEFAULT_POST_LIST);
  const addpost=(userId,posttitle,postbody,postreactions,posttags)=>{
   dispatchpostlist({
    type:'ADD_POST',
    payload:{
      id:Date.now(),
      title:posttitle,
      body:postbody,
      reactions:postreactions,
      tags:posttags
    }
   })
  }
  const deletepost=(postId)=>{
    dispatchpostlist({
      type:'DELETE_POST',
      payload:{
        postId
      }
    })
  }
  return (
    <>
     <Postlist.Provider value={{postlist,addpost,deletepost}}>
      {children}
     </Postlist.Provider>
    </>
  )
}

