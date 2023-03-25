





import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./add.css"
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import ord from "./order.gif"
const Order =({setorder})=>{
  const close=()=>{
    setorder(false)
    
  }
  
    return ReactDOM.createPortal(<div className="modal" id="modal">
          <div className="modal-cont" onClick={close} >
           <div className="order-cont"> <img src={ord} />
         <div className="box-order"> <h1>Your Order was succesful!</h1>
         <Link to="/fakestore"><button className="order-home-btn"> Back to Dashboard</button></Link></div></div>
          </div>
      

    </div>,
     document.getElementById('modal')
      );
}


export default Order;