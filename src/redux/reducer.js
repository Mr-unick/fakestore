import { add, addtocart, remove, removefromcart } from "./const";

const currentstate={
    arr:[],
    cartarr:[],
   calprice:0
};

export const AddCounter =(state=currentstate,action)=>{
   
    switch(action.type){
          
        case add :
        
           
            return{
            
                ...state,
                arr:[...state.arr,action.data]
            };
        break;
        case remove :
           
            return{...state,
                arr:state.arr.filter(iteam=>iteam !== action.data.data)} 
        break;
    case addtocart :
       
        return {
        ...state,cartarr:[...state.cartarr,action.data],calprice:state.calprice +Number( action.data.price),
       
    };
    case removefromcart :
        
            return{...state,
                cartarr:state.cartarr.filter(iteam=>iteam !== action.data.data),
                calprice:state.calprice - Number( action.data.data.price)
            } 
        default:return state;
    }
}

