import React from 'react'
import {useSelector , useDispatch} from "react-redux";
import {useEffect} from "react";
import {getAllUser , getOrderByUser} from "../Redux/actions";
import OrderUser from "./OrderUser";

export default function OrderUserContainer() {
  const allUser = useSelector((state) => state.users);
  const allOrderUser = useSelector((state) => state.ordersUser);
  const user = useSelector((state) => state.user);
  console.log("El user es ", user);
  console.log("Los user son ", allOrderUser);
  const dispatch = useDispatch();

  let name = "";
  let array =[];
  if(user && user.name ){
      name = user.name
     
  }
if( allOrderUser && allOrderUser.orders){
  
    array = allOrderUser.orders
    console.log("El array es " , array);
}

   

  
  useEffect(() => {
    try {
      dispatch(getOrderByUser(user._id));
    } catch (error) {
      console.error("Error al obtener órdenes del usuario:", error);
    }
  }, [dispatch, user._id]);

  return (
    <div className=" mt-4 mx-auto w-3/4 grid gap-4 place-items-center py-4   grid-cols-1 lg:grid-cols-3 ">
   
    {allOrderUser ? (
      allOrderUser.orders.map((order, orderIndex) => {
           return (
            <OrderUser
                key={orderIndex}
                id= {user._id}
                name={user.name}
                idOrder = {order.idOrder}
                products={order.products}
                total={order.total}
              />
           )
            }) 
    ) : (
      <p>Cargando   </p>
    )}
  </div>
  );
  
      }
