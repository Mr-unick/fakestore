









import ReactDOM from 'react-dom';




const Edit =({setopen})=>{
  const close=()=>{
    setopen("")
    
  }
    return ReactDOM.createPortal(<div className="modal" id="modal">
        <div className="modal-cont" >
            <h2>Edit</h2>
         <div className="textareas">  <textarea type="text" placeholder="tittle" className="text-area"/>
           <textarea type="text" placeholder="discription" className="text-area"/></div>
           <div className="modal-buttons"><button className="btn" >Edit</button><button className="btn"onClick={close}>close</button></div>
</div>
       

    </div>,
     document.getElementById('modal')
      );
}


export default Edit;