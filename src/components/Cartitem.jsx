import { useDispatch } from "react-redux";
import { remcartbtn } from "../redux/Slices/Cartslice";
import { substraction } from "../redux/Slices/Counterslice";

function Cartitem({data}){
    const dispatch=useDispatch();
    function rembtnhandler(){
        dispatch(substraction());
        dispatch(remcartbtn(data.id));
    }
    return (
        <div className="Cartitem">
             <h4>{data.title.substring(0,30)}</h4>
            <p>{data.description.substring(0,40)}</p>
            <img id="img" src={data.image} alt="" />
            <div id="pricediv">
                <p>${data.price}</p>
                <button onClick={rembtnhandler} >remove</button>
            </div>
        </div>
    )
}

export default Cartitem;