import React from 'react'
import { UseSelector, useSelector } from 'react-redux';
import {useState } from 'react';
export default function New() {
    const allProducts = useSelector(state => state.products);
    console.log("Los productos son ", allProducts);
  
    const [dataForm, setDataForm] = useState({
      datos: [], // Inicialmente, el estado es un array vacío
      nombreInput: '',
      precioInput: '',
    });
  
    const handleNombreChange = (event) => {
      setDataForm({
        ...dataForm, // Mantén las propiedades existentes
        nombreInput: event.target.value
      });
    }
  
    const handlePrecioChange = (event) => {
      setDataForm({
        ...dataForm, // Mantén las propiedades existentes
        precioInput: event.target.value
      });
    }
  
    const agregarDato = () => {
      const nuevoDato = {
        nombre: dataForm.nombreInput,
        precio: dataForm.precioInput,
      };
  
      setDataForm({
        datos: [...dataForm.datos, nuevoDato], // Actualiza la propiedad "datos"
        nombreInput: '',
        precioInput: '',
      });

      console.log("El data fomr" , dataForm);
    }
  
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Nombre"
            value={dataForm.nombreInput}
            onChange={handleNombreChange}
          />
          <input
            type="number"
            placeholder="Precio"
            value={dataForm.precioInput}
            onChange={handlePrecioChange}
          />
        </div>
        <select id="my-select1">
          <option>Selecciona una Opcion</option>
          {allProducts.length > 0 ? (
            allProducts.map((t) => {
              return <option key={t.id} value={t.name}> {t.name} ${t.price} </option>
            })
          ) : (
            <option>Cargando</option>
          )}
        </select>
        <button onClick={agregarDato}>Agregar</button>
      </div>
    );
  }
  
