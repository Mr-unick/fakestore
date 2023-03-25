









import ReactDOM from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "./add.css"
import { counter, toCart } from '../../../redux/action';


const Add =({setopen,selected,setselected})=>{
  const close=()=>{
    setopen("")
    
  }
  const dispatch =useDispatch()
    return ReactDOM.createPortal(<div className="modal" id="modal">
        <div className="modal-cont" >
          <div className="left"><img src={selected.image} alt="img" height="450" className="prod-img"/></div>
          <div className="right"> <div className="head"> <button className="btn"onClick={close}>X</button></div>
          <div className="head2"> <h2>{selected.title}</h2>
            <p>{selected.discription}</p>
            <h2>${selected.price}</h2></div> 
            <div className="head3"><div className="btns-card btn-modal"> <button onClick={()=>dispatch(counter(selected)) } className="card-btn " ><FavoriteBorderIcon id="modal-add"/> </button>
            <button className="card-btn " onClick={()=>dispatch(toCart(selected)) }><ShoppingCartIcon id="modal-cart"/></button></div></div>
         </div>
           

         
</div>
       

    </div>,
     document.getElementById('modal')
      );
}


export default Add;