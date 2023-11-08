import React from "react";
import {useSelector}  from "react-redux";
import HomeAdmin from "./HomeAdmin";
import HomeUser from "./HomeUser";
import Nav from "./Nav";
export default function Home (){
    const role = useSelector(state => state.role)
    return (
        <div>
           {role ==="admin" ? ( 
            <>
            <Nav/>
           <HomeAdmin/>  
            </>) : (
            <>
             <Nav/>
           <HomeUser/>
            </>) }
        </div>
    )
}