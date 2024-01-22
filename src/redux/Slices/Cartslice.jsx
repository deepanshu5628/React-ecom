import { createSlice } from "@reduxjs/toolkit";

const Cartslice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addcartbtn:(state,actions)=>{
            state.push(actions.payload);
        },
        remcartbtn:(state,actions)=>{
            return state.filter((stat)=>stat.id !=actions.payload);
        }
    }
})
export const {addcartbtn,remcartbtn}=Cartslice.actions;
export default Cartslice.reducer;