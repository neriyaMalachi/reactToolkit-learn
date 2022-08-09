import React, { useRef,useState } from 'react'
// import HomeList from './HomeList';
import './Home.css'
import userEvent from '@testing-library/user-event';
function HomeInput(props) {

  console.log(props.movis_arr);
    const inputRef = useRef();
    const [foundUsers, setSoundUsers]=useState(props.movis_arr);
    const [name,setName]=useState("");

    const filter =(e)=>{

        const keyword= e.target.value;
        if(keyword !== ''){
            const resolts = props.movis_arr.filter((user)=>{
                return user.name.toLowerCase().startsWith(keyword.toLowerCase())
            })
            setSoundUsers(resolts);
        }else{
            setSoundUsers(props.movis_arr);
        }
        setName(keyword)
    }

  return (
    <div className='inputDiv'>
<input
  type="search"
  placeholder='serch...'
  onChange={filter} 
  value={name}
  className="input"
  />      
<div>
      <h2>player:</h2>

{foundUsers &&  foundUsers ?(
    foundUsers.map((user)=>(
        <div className='user'key={user.name} >
       <h4>skin color: {user.skin_color}</h4>
       <button onClick={()=> mass(user.mass)}>for mass click</button>
       <button onClick={()=> gender(user.gender)}>for gender click</button>
       <h3>name: {user.name}</h3>
     </div>
            
    ))
):(
    <h2>no resolts found!!</h2>
)}
</div>
  </div>
  )
}

function mass(propegogor){
    alert(propegogor)
  }
  function gender(proper){
    alert(proper)
  }

export default HomeInput;

