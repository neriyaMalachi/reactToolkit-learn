import React, { useEffect, useContext } from 'react'
import { Context,ContextProvider } from '../Context/Context';

import './Footer.css'


const Footer = (props) => {
 const{name,setName,number,setNumber}=useContext(Context)
  useEffect(() => {

  },[])


  return (
    <div className="footer">
      <div className="divOfplacesForGhob">
        <div className="placesForGhob">
           <h1>כל הזכויות שמורות לחברת אין שם </h1>
         <p>name :  {name}</p>
         <p>age :  {number}</p>

        </div>

      </div>

    </div>
  )
}

export default Footer;