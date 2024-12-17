import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemactions } from '../store/itemslice';
import { fetchactions } from '../store/fetchitems';

export default function Fetch() {
  const fetchStatus=useSelector(store=>store.fetchitems)

  const dispatch=useDispatch();
  useEffect(()=>{
  if(fetchStatus.fetchDone) return;
  // const controller=new AbortController();
  // const signal=controller.signal;
  dispatch(fetchactions.markFetchStarted());
  fetch("http://localhost:8030/items")
  .then((res)=>res.json())
  .then(({items})=>{
    dispatch(fetchactions.markFetchFinshed());
    dispatch(fetchactions.markFetchDone());
    dispatch(itemactions.addInitialItems(items[0]))
    
  });
  //  return()=>{
  //   controller.abort();
  //  };

  },[fetchStatus,dispatch]);
  return (
    <></>
  )
}
