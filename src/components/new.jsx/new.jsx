import useCustomehook from "../../hoo"



const New =()=>{
    const [openaddmodal,opendeletemodal,openeditmodal,closeaddmodal,closedeletemodal,closeeditmodal]=useCustomehook();
    return(
        <div className="box">
            <button onClick={opendeletemodal}>cedit</button>
            <button onClick={openeditmodal}>delete</button>
            <button onClick={openaddmodal}>add</button>
        </div>
    )
}

export default New;