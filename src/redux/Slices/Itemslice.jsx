import { createSlice } from "@reduxjs/toolkit";


const Itemslice=createSlice({
    name:"item",
    initialState:[],
    reducers:{
        fetchdata: (state,actions)=>{
            const newarr=actions.payload;
            state.push(...newarr);
        },
    }
})

export const {fetchdata}=Itemslice.actions;
export default Itemslice.reducer;