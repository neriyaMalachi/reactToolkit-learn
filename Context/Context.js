import React, { useContext, createContext, useState  } from "react";

 export const Context =
 createContext();
  export  const ContextProvider = (props) => {    
  const [number, setNumber] = useState(20);
  const [name,setName]=useState("neriya");
  const value =
    {
    number,
    setNumber,
    name,
    setName

    }
   
  return( 
  <Context.Provider value={value}>
    {props.children}
    </Context.Provider>
    )}