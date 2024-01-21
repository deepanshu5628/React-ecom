import { createSlice } from "@reduxjs/toolkit";

const Cartslice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addcartbtn:()=>{
            console.log("bnt is clicked");
        },
        remcartbtn:()=>{
            console.log("bnt is clicked");
        }
    }
})
export const {addcartbtn,remcartbtn}=Cartslice.actions;
export default Cartslice.reducer;