import React from 'react'
import { deleteOrderUser } from '../Redux/actions';
import {useDispatch} from "react-redux";
import {AiFillDelete} from "react-icons/ai";
import {AiTwotoneEdit} from "react-icons/ai"
export default function OrderUser(props) {
    const { id, idOrder,  products, total } = props;
    const dispatch = useDispatch();

    const deleteOrder = () =>{
        dispatch(deleteOrderUser(id , idOrder));
    }
    return (
       
      <div className=" bg-white roundend-full  w-[200px] h-[260px] p-6">
       
        <div className= "flex justify-between mb-4">
        <button className='border border-red-700 p-1 rounded-md text-red-600 hover:bg-red-600 hover:text-white'
            onClick={deleteOrder}
        ><AiFillDelete />  </button>
          <button 
           className='border border-green-700 p-1 text-green-600  rounded-md hover:bg-green-600 hover:text-white'
        > <AiTwotoneEdit/> </button>
        </div>
        <h2 className="font-bold" >Pedidos   </h2>
        <p>{products}</p>
        <h2 className="font-bold">Total = {total}</h2>
      
      </div>
    );
  }
