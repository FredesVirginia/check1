import React from 'react'
import {useSelector , useDispatch} from "react-redux";
import {useEffect} from "react";
import {getAllUser , getOrderByUser} from "../Redux/actions";
import OrderUser from "./OrderUser";

export default function OrderUserContainer() {
    const allUser = useSelector((state)=> state.users);
    const allOrderUser = useSelector((state) => state.ordersUser);
    const user = useSelector((state) => state.user);
    console.log("El user es " , user);
    console.log("Los user son " , allOrderUser.orders);
    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(getOrderByUser(user._id));
    }, [dispatch , user._id]);

  return (
   
    <div className=" mx-auto bg-orange-600 w-3/4  ">
   
    {allOrderUser ? (
      allOrderUser.map((user, index) => {
        return (
          <div key={user.id}  className="grid gap-4 place-items-center py-4   grid-cols-1 lg:grid-cols-3 ">
           
            {user.orders.map((order, orderIndex) => (
              <OrderUser
                key={orderIndex}
                id= {user.id}
                name={user.name}
                idOrder = {order.idOrder}
                products={order.products}
                total={order.total}
              />
            ))}
          </div>
        );
      })
    ) : (
      <p>Cargando   </p>
    )}
  </div>
  )
}
