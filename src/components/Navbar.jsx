import { useNavigate } from "react-router-dom";
import "./css/Navbar.css";
import { MdShoppingCart } from "react-icons/md";
function Navbar(){
    const navigate=useNavigate();
    return (
        <div className="Navbar">
            <div className="navdiv1">
                <img id="logoimg" src={"https://static.thenounproject.com/png/2018783-200.png"} alt="" />
            </div>
            <div className="navdiv2">
                <div><h3  onClick={()=>navigate("/")}>Home</h3></div>
                <div className="cartlogo" onClick={()=>navigate("/cart")}><MdShoppingCart /></div>
            </div>
        </div>
    )
}
export default Navbar;