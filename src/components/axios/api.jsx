
import axios from "axios"



 export const fetchfunction = async(data)=>{
     await axios.get(`https://api.escuelajs.co/api/v1/products`)
}

