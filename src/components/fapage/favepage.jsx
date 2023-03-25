

import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { minuscounter, toCart } from '../../redux/action';
import Button from '@mui/material/Button';
import { addtocart } from '../../redux/const';


const Fav =()=>{
  const dispatch =useDispatch()
    const [fav,setfav]=useState([])
    const addcounter =useSelector(state => state.arr)

    useEffect(()=>{
        setfav(addcounter)
    })
    return <div className="fav">
      <div className="wishlist"><h2>My Wishlist</h2><h4>{fav.length} iteams</h4></div>
       <div className="fav-prod">{fav.map((data) => (
        <div className="fav-card">
         <div className="fav-top"> <img src={data.image} className="fav-img"/></div>
         
      
        
          <div className="fa-btm"><div className="title-cont"><h4>{data.title}</h4></div>
        <div className="fav-btns">
        <Button variant="outlined" id="fav-btn" onClick={()=>dispatch(minuscounter({data}))}> remove</Button>
        <Button variant="outlined"  id="fav-btn" onClick={()=>dispatch(toCart({title:`${data.title}`,price:`${data.price}` ,image:`${data.image}`,discription:`${data.description}`}))}> Add to Cart</Button>
        </div></div>
        </div>
      ))}</div>
    </div>
}

export default Fav;