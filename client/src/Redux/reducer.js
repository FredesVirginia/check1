

const initialState = {
   login: false,
   register: false,
   user:{},
   users:[],
   orders:[], 
   ordersUser:{},
   products: [],
   token:"",
   role: ""
}

export default function reducer( state = initialState, action){
   switch(action.type){

      case "GET_ALL_USERS":
          return {
              ...state,  
              users : action.payload
          } 

      case "LOGIN_USER":
          return {
              ...state,  
              login : action.payload
          } 


       case "REGISTER_USER":
          return {
              ...state,  
              register : action.payload
          } 

        case "SET_TOKEN" : {
            return {
                ...state , 
                token : action.payload
            }
        }

        case "SET_ROLE" : {
            return {
            ...state,
                role:action.payload
            }
        }

        case "ADD_PRODUCT" :{
            return {
                ...state ,
               
            }
        }

        case "LIST_PRODUCT" : {
            return {
                ...state ,
                products : action.payload
            }
        }

        case  "USER_SESSION" : {
            console.log("EL user en el reducer es " , action.payload);
            return {
                ...state,
                user : action.payload
            }
        }

        case "DELETE_ORDER_USER" : {
            return {
                ...state ,
                ordersUser : action.payload
            }
        }

        case "GET_ORDER_BY_USER" : {
            console.log("El user en order es  REDUCER" , action.payload)
            return {
                ...state ,
                ordersUser : action.payload
            }
        }

    

      default : 
          return {
              ...state
          }
      
  }
}