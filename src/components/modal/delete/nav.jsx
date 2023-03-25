






import cart from "./cart.gif"

import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

import ReactDOM from 'react-dom';

import { useSelector } from 'react-redux';


const Nav =()=>{

  const addcounter =useSelector(state => state.arr)
  const addtocart =useSelector(state => state.cartarr)

  return (
<div><div className="nav"><div className="left-nav"><img src={cart} alt="logo" height="50" width="50"/>
       <h1 className="tittle"><i>Fake</i><i id="store">Store</i></h1> </div><div className="social">
       <p> <Link to="/fakestore"><HomeIcon id="homeicon"/></Link></p>
        <p> <Link to="/fav"><FavoriteIcon id="favicon"/></Link></p> 
        < p id="cart-nav"><Link to="/cart"><ShoppingCartIcon id="carticon"/></Link>{addtocart.length !==0 && addtocart.length}</p></div></div>
  
 </div>
  )
}


export default Nav;