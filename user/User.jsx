import React, { useState, useEffect, useRef, useContext } from 'react'
import { Context,ContextProvider } from '../Context/Context';

const User = () => {
 
    const { name,setName,number,setNumber}=useContext(Context);
const [changhName,setChanghName]=useState(name);
    useEffect(() => {
        setName(changhName);
    }, [changhName])
useEffect(()=>{
console.log({name});
},[{name}])

    return (
      
        <div className='contaner'>
            <h1>welcome to company</h1>
            <h2>your name is {name} </h2>
            <input onChange={(e)=>{setChanghName(e.target.value)}}  type="text" id="changer" />
        </div>
     
    )
}
export default User;





