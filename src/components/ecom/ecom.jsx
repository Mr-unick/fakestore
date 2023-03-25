
import axios from "axios"
import { useEffect, useState } from "react";
import {  useDispatch, useSelector } from 'react-redux';
import { counter, toCart} from "../../redux/action";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Add from "../modal/add/add";




const Ecom =()=>{


const dispatch =useDispatch()

    const [Dta,setdata]=useState([]);
    const addcounter =useSelector(state => state.arr)
    const addtocart =useSelector(state => state.cartarr)
 
    const [open,setopen]=useState("");
 const [selected,setselected]=useState([])

  const openmodal=(data)=>{
    setopen("product")
    setselected(data)
    
    
  }
    useEffect(()=>{
    
    axios.get('https://fakestoreapi.com/products').then( (response)=> {
            
          setdata( response.data)
          });
     },[])
  
    return <div className="ecom-box">
      
      {open && <Add setopen={setopen} selected={selected} />}
  <div className="carditeams">
  {Dta.map((data)=>{
        return <div className="card">
           
            <div className="img-card"  onClick ={()=>{openmodal(data={title:`${data.title}`,price:`${data.price}` ,image:`${data.image}`,discription:`${data.description}`})}} > <img src={data.image} alt="img" className=" iteam-img"></img></div>
           <div className="bottom">
           <div className="name-card"> <p className="name">{data.title}</p></div>
            
  <div className="foot"><p className="price">₹{data.price}</p>

 <div className="btns-card"> <button onClick={()=>dispatch(counter(data={title:`${data.title}`,price:`${data.price}` ,image:`${data.image}`,discription:`${data.description}`})) } className="card-btn " ><FavoriteBorderIcon id="fav-add"/> </button>
 <button className="card-btn " onClick={()=>dispatch(toCart(data={title:`${data.title}`,price:`${data.price}` ,image:`${data.image}`,discription:`${data.description}`})) } ><ShoppingCartIcon id="cart-add"/></button></div></div>
           </div>
 

        </div>
          })}
  </div>
    </div>
}

export default Ecom;