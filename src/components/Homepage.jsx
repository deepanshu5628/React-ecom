import { useDispatch, useSelector } from "react-redux";
import "./css/Homepage.css";
import Itemcard from "./Itemcard";
function Homepage(){
    const dispatch=useDispatch();
    const items=useSelector((state)=>state.item);   
    return (
        <div className="Homepage">
            {items.map((item)=><Itemcard data={item} key={item.id}/>)}
        </div>
    )
}
export default Homepage;