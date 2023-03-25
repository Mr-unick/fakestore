

import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {  remCart } from '../../redux/action';
import Button from '@mui/material/Button';
import Order from '../modal/add/order';


const Cartpage =()=>{

    
  const dispatch =useDispatch()
  const [cart,setcart]=useState([])
 const[order,setorder]=useState(false)
  

  const addtocart =useSelector(state => state.cartarr)
  const total =useSelector(state => state.calprice)
  const openorder =(data)=>{
   if(cart.length !== 0){
    setorder(true)
   }
  }
  useEffect(()=>{
    setcart(addtocart)
})

 console.log(cart)
    return <div className="cart-box">
     {order && <Order setorder={setorder}/>}
       <div className="product-cart2">
       <div className="product-cart">{cart.map((data) => (
        <div className="cart-card">
           
           <div className="lefts"> <img src={data.image} className="cart-img"/></div>
            <div className="rigt"><p>{data.title}</p>
            <Button variant="outlined" onClick={()=>dispatch(remCart({data}))} id="cr-btn">remove</Button></div>
       </div>
      ))}
      </div>
      <Button  variant="contained" onClick={openorder}>Place Order</Button>
       </div>
      <div className="total"> <div className="detail"><p>Price Detail</p></div><div className="tot">
      {cart.map((data) => (
        <div className="tot-list"><p>{data.price}</p></div>
      ))}</div>  <div className="btm"><h3>total = ₹{Math.round(total * 100) / 100}</h3></div></div>
     
    </div>
}

export default Cartpage;