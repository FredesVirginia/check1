

const initialState = {
   login: false,
   register: false,
   user:{},
   users:[],
   orders:[], 
   ordersUser:[],
   products: [],
   token:"",
   role: ""
}

export default function reducer( state = initialState, action){
   switch(action.type){

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

    

      default : 
          return {
              ...state
          }
      
  }
}