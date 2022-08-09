import React, { useContext, useEffect } from 'react'
import { Context,ContextProvider } from '../Context/Context';

const Cards = () => {
    const { name,setName,number,setNumber}=useContext(Context);
    // set
console.log(name);
console.log(number);
const changh=()=>{

}
useEffect(()=>{
    console.log({name});
    },[{name}])
    return (
        <div>
        <h1>useContext</h1>
    
           <h2>name:{name}</h2>
           <h3>number:{number} </h3>     
           <button onClick={()=>{setName("neriya_malachi")}}>add name</button>   
        </div>
    )
}
export default Cards;