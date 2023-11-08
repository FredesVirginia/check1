import axios from "axios";


export  function registerUser (user){
    return async function(dispatch){
        try{
            console.log("El user desde registro es  " ,user);
            const userR = await axios.post(`http://localhost:3001/auth/register/`, user );
           console.log("La respuesta desde l back fue" , userR.data);
            return dispatch ({
                type: "REGISTER_USER",
                payload: true
               
            })
        }catch(error){
            console.log("Error desde action action registerUser", error);
        }
    }
}



export function loginUser(user) {
    return async function (dispatch) {
      try {
        const userR = await axios.post(`http://localhost:3001/auth/login`, user);
        console.log("EL user es " , userR);
        if (userR.status === 200) {
            console.log("El user es " , userR);
          const token = userR.data.tokenSession;
          dispatch(setToken(token));
          dispatch(setRole(userR.data.data.role));
          return dispatch({
            type: "LOGIN_USER",
            payload: true,
          });
        }
      } catch (error) {
        console.log("Error desde action loginUser", error);
      }
    };
  }
  

 export function addNewProduct(product){
    return async function (dispatch){
        try{
          const newProduct = await axios.post(`http://localhost:3001/products/add`, product);
          if(newProduct.status === 200){
              console.log("EL nuevo pruucto es " , newProduct.data)
              return dispatch({
                type : "ADD_PRODUCT", 
                payload : true
              })
          }
        }catch(error){
          console.log(error);
        }
    }
 } 

export function setToken(token){
    return {
        type : "SET_TOKEN",
        payload : token
    }
}


export function setRole(role){
        return {
            type : "SET_ROLE",
            payload : role
        }
}


export function getAllProducts(product){
  return async function (dispatch){
      try{
        const listProduct = await axios.get(`http://localhost:3001/products/listName`, );
        if(listProduct.status === 200){
            console.log("EL nuevo pruucto es " , listProduct.data)
            return dispatch({
              type : "LIST_PRODUCT", 
              payload : listProduct.data
            })
        }
      }catch(error){
        console.log(error);
      }
  }
} 




