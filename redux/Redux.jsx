import { createSlice } from "@reduxjs/toolkit";


//firste state
const initValue = {
counter:99
,number:20
}

const counterSlice = createSlice({
name:"shimon_malachi",
initialState: initValue,
reducers:{

Add1:(state,action)=>{
  state.counter++;
},

resetCount:(state,action)=>{
  state.counter=0;
},

Add5:(state,action)=>{
state.counter+= action.payload.counterVal;
},
Sub:(state,action)=>{
state.counter-=5
}

}
})
export const {Add1 ,resetCount,Add5,Sub}=counterSlice.actions
export default counterSlice.reducer