import React from 'react'
import { deleteOrderUser } from '../Redux/actions';
import {useDispatch} from "react-redux"
export default function OrderUser(props) {
    const { id, idOrder,  products, total } = props;
    const dispatch = useDispatch();

    const deleteOrder = () =>{
        dispatch(deleteOrderUser(id , idOrder));
    }
    return (
       
      <div className=" bg-white roundend-full  w-[260px] p-3">
       
      
        <h2 className="font-bold" >Pedidos   </h2>
        <p>{products}</p>
        <h2 className="font-bold">Total = {total}</h2>
        <button 
            onClick={deleteOrder}
        >Borrar Order</button>
      </div>
    );
  }
