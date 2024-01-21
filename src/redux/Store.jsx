import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Slices/Cartslice";
import Itemslice from "./Slices/Itemslice";

const Store=configureStore({
    reducer:{
        cart:Cartslice,
        item:Itemslice,
    }
});

export default Store;