import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Slices/Cartslice";
import Itemslice from "./Slices/Itemslice";
import Counterslice from "./Slices/Counterslice";

const Store=configureStore({
    reducer:{
        cart:Cartslice,
        item:Itemslice,
        counter:Counterslice,
    }
});

export default Store;