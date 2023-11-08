import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {useState} from "react";
import { addNewProduct} from "../Redux/actions";


export default function AddProduct(){

  const dispatch = useDispatch();
  const [product , setProduct] = useState({
     name : "",
     description : "",
     price : 0,
     quantity : 0,
     
  });

   const setDataHandler = (e) => {
      const { id,  value } = e.target;
     
      setProduct((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    };


    const onSubmit = async  (e)=>{
        e.preventDefault();
       const result = await dispatch(addNewProduct(product));
       if(result.payload){
       alert("MUY HECHO ");
       setProduct({
        name : "",
        description : "",
        price : 0,
        quantity : 0,
       })
       }else{
        alert("Uii INTETELO DE NUEVO");
       }
    }

    return (
      <div className='py-16 mt-10  m-auto w-[400px] h-[490px] bg-white flex justify-center content-center rounded-lg'>
      <div>
         <h1 className='text-2xl font-bold text-center'>Beaches Chat</h1>
        <h2 className='text-center m-[20px]'> New Product</h2>
        <form className="grid gap-8" onSubmit={onSubmit}>
        <input className="border-b-gray-300 border-b focus:outline-blue-500 " type="text" placeholder="Name"
          onChange={setDataHandler}
          value={product.name}
       
          id="name"
        />
        <input className="border-b-gray-300 border-b focus:outline-blue-500 " type="text" placeholder="Description"
          onChange={setDataHandler}
          value={product.description}
         
          id="description"
        />
          <input className="border-b-gray-300 border-b focus:outline-blue-500 " type="text" placeholder="Price"
            onChange={setDataHandler}
          value={product.price}
         
          id="price"
          />
          <input className="border-b-gray-300 border-b focus:outline-blue-500 " type="text" placeholder="Quantity" 
            onChange={setDataHandler}
          value={product.quantity}
        
          id="quantity"
          />
          
            
          <button className='bg-indigo-400 p-2 font-bold text-white hover:bg-indigo-800 transition'> Add</button>
        </form>
      
      </div>
    </div>
      
      
    )
}