import React, { useState, useEffect, useContext } from 'react';
import HomeInput from './HomeInput';
import { useSelector } from "react-redux";
const Home = () => {

const counter =useSelector((myState)=>myState.counterSlice.counter)  

const [movis_arr, setMovis_arr] = useState([]);
  const [serch, setSerch] = useState("Darth Vader");

   useEffect(() => {
    inputText();
  }, [])

  const inputText = async() =>{
  let url = "https://swapi.dev/api/people/?format=json";
  let resp = await fetch(url);
  let data = await resp.json();
  setMovis_arr(data.results);
}
console.log(movis_arr);   
  return (
    <div>
      <h2>counter for homeCounter : {counter} </h2>
      <hr />
      <HomeInput movis_arr={movis_arr} setMovis_arr={setMovis_arr}  />
    </div>
  )
}

export default Home;

