import "./Popup.css";
export default function Popup({Theissue , color}){
    function removePopup(){
        window.location.reload()
    }
    return(
            <div className="popup"  >
                <h2 style={{color:color }}>{Theissue}</h2>
                <button onClick={removePopup}>X</button>
            </div>
    )
}