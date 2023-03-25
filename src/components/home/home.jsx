


import "./home.css"
import pic from "../../components/pen.gif"



const Home =({opendeletemodal,openeditmodal})=>{
    return <div className="home">
       
      <div className="box">
      <div className="text">
         <p className="p1">My Notes</p>
         <div className="buttons">
            <button className="but all-btn">all</button>
            <button className="but imp-btn">Faviorites </button>
        </div>
        </div>
        
        <div className="imgs"><img src={pic} alt="logo" height="400" width="400"/></div>
      </div>
        <div className="all-nots">
            <div className="card"><div className="head"><div className="head2"><button>love</button></div>
            <h2>tittle</h2>
            <p>discription</p></div>
            <div className="card-btn"><button className="but edit-btn " onClick={openeditmodal}>edit</button><button className="but close-btn " onClick={opendeletemodal}>Delete</button></div></div>
           
        </div>
    </div>
}

export default Home;