import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Add1,Add5,resetCount,Sub} from '../redux/Redux'
function HomeCounter() {

    const dispatch=useDispatch();
    const counter = useSelector ((myStore) => myStore.counterSlice.counter)
    
  return (
    <div>
       <h2> HomeCounter:{counter}</h2>
       <button onClick={()=>{
       dispatch(Add1())
       }}>add one number</button>
       <button onClick={()=>{
        dispatch(resetCount())
       }}>reset</button>
       <button onClick={()=>{
       dispatch(Add5({counterVal:5}))
       }}>add five number</button>
       <button onClick={()=>{
       dispatch(Sub())
       }}>sub-5</button>
    </div>

  )
}

export default HomeCounter