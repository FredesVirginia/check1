import React from "react";
import { Link } from "react-router-dom";
export default function Login (){
    return (
       
      <div className='py-16  m-auto w-[400px] h-[490px] bg-white flex justify-center content-center rounded-lg'>
      <div>
         <h1 className='text-2xl font-bold text-center'>Beaches Chat</h1>
        <h2 className='text-center m-[20px]'> Login</h2>
        <form className="grid gap-8">
      
          <input className = "border-b-gray-300 border-b" type="email" placeholder="Email"/>
          <input className = "border-b-gray-300 border-b" type="password" placeholder="password"/>
            
          <button className='bg-indigo-400 p-2 font-bold text-white hover:bg-indigo-800 transition'> Sign Up</button>
        </form>
        <p className='text-center my-4'>You do have an Account?
        <Link to="/" className=" ml-[5px] text-blue-800 underline">Register</Link>
        </p>
      </div>
    </div>
    )
}