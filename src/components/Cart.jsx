import { useSelector } from "react-redux";
import Cartitem from "./Cartitem";
import "./css/Cart.css";
import { NavLink, useNavigate } from "react-router-dom";
function Cart(){
    const navigate=useNavigate();
    let count=useSelector((state)=>state.counter.value);
    const cartitems=useSelector((state)=>state.cart);
    let length=cartitems.length;
    let total=0;
    cartitems.map((item)=>{
        return total+=item.price;
    });
    return (
        <div className="Cart">
           <div className="cartdiv1">
           {length===0? (
                <div> 
                <h1>Your Cart is Empty </h1>
                <button onClick={()=>navigate("/")}>Shop Now</button>
                </div>
            ):(cartitems.map((item)=><Cartitem data={item} key={item.id} />))}
           </div>
           <div className="cartdiv2">
            <p>YOUR CART</p>
            <h3>SUMMARY</h3>
            <p>Total Items:{count}</p>
            <p>Total Amount:{total}</p>
            <button>Checkout Now</button>
           </div>
        </div>
    )
}
export default Cart;