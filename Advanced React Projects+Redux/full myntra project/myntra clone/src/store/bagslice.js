import { createSlice } from "@reduxjs/toolkit";

const bagslice=createSlice({
  name:'bag',
  initialState:[],
  reducers:{
    addToBag:(state,action)=>{
        state.push(action.payload)
    },
    removeFromBag:(state,action)=>{
      return state.filter(item=>item!==action.payload)
    }
  }
})
export default bagslice;
export const bagactions=bagslice.actions