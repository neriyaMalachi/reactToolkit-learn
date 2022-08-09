import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {resetItem} from './ToolkitSlice'


 function ToolkitList() {
  
  const dispatch=useDispatch();
  const todo_ar = useSelector(state => state.ToolkitSlice.users_arr)
  return (
    <div>
      
  <div>  
{console.log(todo_ar)}
  {todo_ar.map((item) =>{
    return(
    <div key={item.id}>
        <div><h2>{item.name}</h2>------ <h2>{item.time}</h2> <button onClick={()=>{
dispatch(resetItem({delId:item.id}))
        }}>x</button></div>
        </div>
    )})} 
  </div>
  </div>
  )
}




  export default ToolkitList;