import { createSlice } from "@reduxjs/toolkit";

const itemslice=createSlice({
  name:'items',
  initialState:[],
  reducers:{
    addInitialItems:(state,action)=>{
        return action.payload
    }
  }
})
export default itemslice;
export const itemactions=itemslice.actions