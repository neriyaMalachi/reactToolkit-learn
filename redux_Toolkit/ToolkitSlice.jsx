 import { createSlice } from "@reduxjs/toolkit";

 const KEY_LOCAL="todo_local"
 
 const initState=localStorage[KEY_LOCAL] ? JSON.parse(localStorage[KEY_LOCAL] ):
 {
     users_arr:[]   
}
const ToolkitSlice = createSlice({
name:"users",
initialState: initState,

reducers:{
    
     addItem:(state,action)=>{   
     state.users_arr.push(action.payload.todoItem)
     saveToLocal(state)
    },
    resetItem:(state,action)=>{
    state.users_arr=state.users_arr.filter(
        (item)=>item.id != action.payload.delId
    )
    saveToLocal(state)

    },resetAllItem:(state,action)=>{
      state.users_arr=[]
      saveToLocal(state)
    }
}
})

const saveToLocal = (state) =>{
    localStorage.setItem(KEY_LOCAL, JSON.stringify(state))
}

export const { resetAllItem,addItem ,resetItem} = ToolkitSlice.actions
export default ToolkitSlice.reducer;
