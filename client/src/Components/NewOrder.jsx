import React    from 'react';
import { useState , useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {  Link } from 'react-router-dom';

import { getAllProducts} from "../Redux/actions";


    const FormVideogame = () => {
         const allOrders= useSelector(state=>state.products);   
       
         console.log("todos los generes son " , allOrders);
         
         const [selectedOptions, setSelectedOptions] = useState([]);
         const [selectedOrders, setSelectedOrders] = useState([]);
        const dispatch = useDispatch();
         const [dataForm , setDataForm] = useState({
              order: ""
              
         });

      

         const setDataHandler = (e) => {
            const { id,  value } = e.target;
           
            setDataForm((prevState) => ({
              ...prevState,
              [id]: value,
            }));
          };

          const handleSelectChange1 = (event) => {
            const options = Array.from(event.target.selectedOptions).map((option) => option.value);
            options.forEach((option) => {
              if (!selectedOptions.find((o) => o.name === option)) {
                setSelectedOptions([...selectedOptions, { name: option, isChecked: true }]);
                  }
                });

            
              };

          const handleCheckboxChange1 = (event, option) => {
            const isChecked = event.target.checked;
            setSelectedOptions(
              selectedOptions.map((o) => (o.name === option ? { ...o, isChecked } : o))
                );
              };

          const handleSelectChange2 = (event) => {
                const options = Array.from(event.target.options).map((option) => option.value);
                options.forEach((option) => {
                  if (!selectedOrders.find((o) => o.name === option)) {
                    setSelectedOrders([...selectedOrders, { name: option, isChecked: true }]);
                      }
                    });

                    
              };

          const handleCheckboxChange2 = (event, option) => {
                const isChecked = event.target.checked;
                setSelectedOrders(
                  selectedOrders.map((o) => (o.name === option ? { ...o, isChecked } : o))
                    );
             };

          
          const handleSaveClick = (e) => {
            

            const selectOrderss = selectedOrders
              .filter((option) => option.isChecked)
              .map((option) => option.name);
              const ordersString = selectOrderss.join(", ");
           
              setDataForm({
                  ...dataForm,
                  orders: ordersString,
                 
                 });

                 
            };
                  
         
                

          const onSubmit= (e)=>{
            e.preventDefault();
           
          }

          useEffect(() => {
            dispatch(getAllProducts());
           
          }, [dispatch]);

       

        return (
            <div className='py-16  m-auto mt-10 w-[400px] h-[490px] bg-white flex justify-center content-center rounded-lg'>
      <div>
         <h1 className='text-2xl font-bold text-center'>New Order</h1>
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
        );
    }

export default FormVideogame;