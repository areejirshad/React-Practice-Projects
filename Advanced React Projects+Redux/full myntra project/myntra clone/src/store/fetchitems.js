import { createSlice } from "@reduxjs/toolkit";

const fetchslice=createSlice({
  name:'fetch',
  initialState:{
    fetchDone:false,
    currentlyFetching:false,
  },
  reducers:{
      markFetchDone:(state)=>{
          state.fetchDone=true;
      },
      markFetchStarted:(state)=>{
        state.currentlyFetching=true;
    },
    markFetchFinshed:(state)=>{
       state.currentlyFetching=false;
  },
    }
  
})
export default fetchslice;
export const fetchactions=fetchslice.actions