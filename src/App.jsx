import { Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage";
import Routerfile from "./components/Routerfile"
import Cart from "./components/Cart"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchdata } from "./redux/Slices/Itemslice";
function App() {
  const dispatch=useDispatch();
  
  async function fetchbtnhandler(){
    try {
      let url="https://fakestoreapi.com/products";
    let res=await fetch(url);
    let data=await res.json();
    dispatch(fetchdata(data));
    } catch (error) {
      console.log("error in fetching data");
    }
  }

    useEffect(()=>{
        fetchbtnhandler();
      },[]);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Routerfile/>}>
          <Route index element={<Homepage/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
