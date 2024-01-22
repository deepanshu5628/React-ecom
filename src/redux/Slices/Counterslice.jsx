import { createSlice } from "@reduxjs/toolkit";

const Counterslice=createSlice({
    name:"counter",
    initialState:{
        value:0,
    },
    reducers:{
        addition:(state)=>{state.value+=1},
        substraction:(state)=>{state.value-=1},

    },
})
export const {addition,substraction}=Counterslice.actions;
export default Counterslice.reducer;