import { useDispatch, useSelector } from "react-redux";
import "./css/Itemcard.css";
import { addcartbtn, remcartbtn } from "../redux/Slices/Cartslice";
import {addition,substraction} from "../redux/Slices/Counterslice";
function Itemcard({data}){
    const dispatch=useDispatch();
    const cartitem=useSelector((state)=>state.cart);
    function addtocartbtn(){
        dispatch(addition());
        dispatch(addcartbtn(data));
    }
    function remfromcartbtn(){
        dispatch(substraction());
        dispatch(remcartbtn(data.id));
    }
    return (
        <div className="Itemcard">
            <h4>{data.title.substring(0,30)}</h4>
            <p>{data.description.substring(0,50)}</p>
            <img id="img" src={data.image} alt="" />
            <div id="pricediv">
                <p>${data.price}</p>
                {cartitem.some((item)=>item.id ===data.id) ?
                <button onClick={remfromcartbtn}>remove</button>:
                <button onClick={addtocartbtn}>Add</button>
            
                }
            </div>
        </div>
    )
}

export default Itemcard;