import React from 'react'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {HiShoppingCart} from  "react-icons/hi"
export default function Nav() {
    const role = useSelector(state => state.role);
  return (
    <nav className="h-[90px] bg-gray-300">
      {
        role === "admin" ?
         (<div className="flex ">
              
            <div className="flex space-x-3 ">
             < HiShoppingCart  className ="text-3xl"/>
               <h1 className="text-2xl font-bold">  Beach Store</h1>
            </div>
            <h2>Create new Product</h2>
         </div>) 
         :
         (<div className="flex  py-5 px-10 justify-between items-center space-x-4">
        
         <div className="flex space-x-3 ">
             < HiShoppingCart  className ="text-3xl"/>
               <h1 className="text-2xl font-bold">  Beach Store</h1>
            </div>
         
         <Link to="/newOrder" className=" font-bold  hover: border-b-black"> Create new Order</Link>
         </div>)
      }
    </nav>
  )
}
