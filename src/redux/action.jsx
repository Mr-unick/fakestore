import { add, addtocart, remove, removefromcart } from "./const"






export const counter =(data)=>{
    return {
        type:add,
     data:data,
    added:true
    }
}
export const minuscounter =(data)=>{
    return {
        type:remove,
        data:data,
        added:false
    }
}
export const toCart =(data)=>{
    return {
        type:addtocart,
        data:data,
    }
}
export const remCart =(data)=>{
    return {
        type:removefromcart,
        data:data,
    }
}