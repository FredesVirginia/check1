import React from "react";

import { useDispatch, useSelector } from 'react-redux';
import {useState} from "react";
import { registerUser

 } from "../Redux/actions";
import { Link } from "react-router-dom";
export default function Register(){
  const dispatch = useDispatch();
  const [user , setUser] = useState({
     name : "",
     surname : "",
     email : "",
     password : "",
     address : "" , 
     role : ""
  });

   const setDataHandler = (e) => {
      const { id,  value } = e.target;
     
      setUser((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    };


    const onSubmit = (e)=>{
        e.preventDefault();
        dispatch(registerUser(user));
    }

    return (
      <div className='py-10  m-auto my-10 w-[400px] h-[580px] bg-white flex justify-center content-center rounded-lg'>
      <div>
         <h1 className='text-2xl font-bold text-center'>Beaches Chat</h1>
        <h2 className='text-center m-[20px]'> Register</h2>
        <form className="grid gap-8" onSubmit={onSubmit}>
        <input className="border-b-gray-300 border-b focus:outline-blue-500 " type="text" placeholder="Name"
          onChange={setDataHandler}
          value={user.name}
       
          id="name"
        />
        <input className="border-b-gray-300 border-b focus:outline-blue-500 " type="text" placeholder="Surname"
          onChange={setDataHandler}
          value={user.surname}
         
          id="surname"
        />
          <input className="border-b-gray-300 border-b focus:outline-blue-500 " type="text" placeholder="Address"
            onChange={setDataHandler}
          value={user.address}
         
          id="address"
          />
          <input className="border-b-gray-300 border-b focus:outline-blue-500 " type="text" placeholder="Role" 
            onChange={setDataHandler}
          value={user.role}
        
          id="role"
          />
          <input className = "border-b-gray-300 border-b" type="email" placeholder="Email" 
            onChange={setDataHandler}
          value={user.email}
         
          id="email"
          />
          <input className = "border-b-gray-300 border-b" type="password" placeholder="password" 
            onChange={setDataHandler}
          value={user.password}
         
          id="password"
          />
            
          <button className='bg-indigo-400 p-2 font-bold text-white hover:bg-indigo-800 transition'> Sign Up</button>
        </form>
        <p className='text-center my-4'>You do have an Account?
        <Link to="/" className=" ml-[5px]  text-blue-800 underline">Login</Link>
        </p>
      </div>
    </div>
      
      
    )
}