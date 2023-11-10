import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts , createOrder } from '../Redux/actions'; // Asegúrate de importar la acción adecuada
import {MdOutlineProductionQuantityLimits} from "react-icons/md";
import {Link} from "react-router-dom";




const NewOrder = () => {
  const allProducts = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  console.log("El user es newOrder   " , user);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [orders, setOrders] = useState([]);
  let listNameOrder = "";
  let total = 0;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

 
  useEffect(() => {
   listNameOrder =  orders.map(order => order.productName).join( " , " );
   
  }, [orders]);

 

  const handleSelectChange = (event) => {
    const selectedProductName = event.target.value;
    const selectedProduct = allProducts.find((product) => product.name === selectedProductName);
    setSelectedProduct(selectedProduct);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const addOrder = (event) => {
    event.preventDefault();

    if (!selectedProduct || quantity <= 0) {
      // Validación básica para asegurarse de que el producto y la cantidad sean válidos
      return;
    }

    const newOrder = {
      productName: selectedProduct.name,
      quantity: parseInt(quantity, 10),
      totalPrice: (selectedProduct.price * parseInt(quantity, 10)).toFixed(2),
    };

    setOrders([...orders, newOrder]);
  
    // Limpia los campos después de agregar un pedido
    setSelectedProduct(null);
    setQuantity('');
  };

  const handleSubmit = (e) => {
   
    let dataForm = {
      products : listNameOrder,
      totalOrder : total
    }

    console.log("EL forma para el back es " , dataForm);
    console.log("El id del user desde newOrden front es " , user._id);
    dispatch(createOrder(dataForm , user._id))
  }
  

   const calculateTotal = () => {
   total = orders.reduce((acc, order) => acc + parseFloat(order.totalPrice), 0).toFixed(2);
    return total;
};

  

  return (
    <div className="py-16 pb-10 m-auto mt-10 mb-10 w-[400px] bg-white flex justify-center content-center rounded-lg">
      <div >
        <h1 className="text-2xl font-bold text-center">New Order</h1>

        <form className="grid gap-8" onSubmit={addOrder}>
          <label className="font-bold text-center">Products</label>

          <select  className="border-gray-800 border-solid" id="my-select1" onChange={handleSelectChange} value={selectedProduct?.name || ''}>
            <option>Selecciona una Opcion</option>
            {allProducts.length > 0 ? (
              allProducts.map((t) => (
                <option key={t.id} value={t.name}>
                  {t.name} _ ${t.price}
                </option>
              ))
            ) : (
              <option>Cargando</option>
            )}
          </select>

          <Link to="/home" className= " text-bold text-center underline text-sky-600"> Volver </Link>

          {selectedProduct && (
            <div className="w-[360px] space-y-1">
              <label className="font-bold"> Nombre del Producto  </label>
              <input type="text" value={selectedProduct.name} readOnly />

              <label className="font-bold">Cantidad</label>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                placeholder="  Ingrese la cantidad"
                required
              />
                 
              <button   type="submit" className="mt-4 bg-indigo-600 p-2 font-bold text-white hover-bg-indigo-800 transition">
                Confirmar Pedido
              </button>
            </div>
          )}
        </form>

        {orders.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mt-4"> Pedidos Realizados </h2>
            <ul>
              {orders.map((order, index) => (
                <li key={index}>
                  {order.productName} -  Cantidad = {order.quantity} - Total = ${order.totalPrice}
                </li>
              ))}
            </ul>
              <p className="font-bold mt-2">Total de la Compra: ${calculateTotal()}</p>
            <button  onClick={handleSubmit} type="submit" className=" w-[380px] mt-4 bg-indigo-800 p-2 font-bold text-white hover-bg-indigo-800 transition">
                Finalizar Compra
              </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewOrder;



