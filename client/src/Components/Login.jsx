import React from "react";
import { Link } from "react-router-dom";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {loginUser} from "../Redux/actions";
import { useDispatch, useSelector } from 'react-redux';
export default function Login (){
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user , setUser] = useState({
      email: "",
      password : "", 
    });

    const setDataHandler = (e) => {
      const { id,  value } = e.target;
     
      setUser((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    };


    const onSubmit = async (e)=>{
      e.preventDefault();
      const userR = await dispatch(loginUser(user));
    
      if (userR.payload) {
        
        navigate('/home'); // Redirige al usuario a la ruta "home"
      }else{
        console.log("Por el else del Login submit")
      }
    }
    return (
       
      <div className='py-16  m-auto mt-10 w-[400px] h-[490px] bg-white flex justify-center content-center rounded-lg'>
      <div>
         <h1 className='text-2xl font-bold text-center'>Beaches Chat</h1>
        <h2 className='text-center m-[20px]'> Login</h2>
        <form className="grid gap-8" onSubmit={onSubmit}>
      
          <input className = "border-b-gray-300 border-b" type="email" placeholder="Email"

            id= "email"
            onChange={setDataHandler}
            value = {user.email}
          />
          <input className = "border-b-gray-300 border-b" type="password" placeholder="password" 
          id="password"
            onChange={setDataHandler}
            value = {user.password}
          />
            
          <button className='bg-indigo-400 p-2 font-bold text-white hover:bg-indigo-800 transition'> Sign Up</button>
        </form>
        <p className='text-center my-4'>You do have an Account?
        <Link to="/" className=" ml-[5px] text-blue-800 underline">Register</Link>
        </p>
      </div>
    </div>
    )
}