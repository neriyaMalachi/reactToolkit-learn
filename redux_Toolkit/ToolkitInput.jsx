import React, { useRef } from 'react'
import {useDispatch} from 'react-redux'
import { resetAllItem,addItem  } from './ToolkitSlice';

function ToolkitInput() {
  const dispatch=useDispatch();
  const nameRef=useRef();
  const timeRef=useRef();
 
  const onAdClick = () =>{
    let todoObject={
      name:nameRef.current.value,
      time:timeRef.current.value,
      id:Date.now()
    }
    
    console.log(todoObject);
    dispatch(addItem({todoItem:todoObject}))

    }
  return (
    <div className='container'>
  <h2>input user end time for the meeting :</h2>
  <input ref={nameRef} type="text" placeholder='name' />
  <input ref={timeRef} type="number" placeholder='age' />
  <button onClick={onAdClick}>Add User</button>
  <button onClick={()=>{
    dispatch(resetAllItem())
  }}>reset</button>
    </div>
  )
}
export default ToolkitInput;