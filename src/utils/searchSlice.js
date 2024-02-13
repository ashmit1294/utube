import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
    },
    reducers:{
        cacheResults:(state,action)=>{
            // if (state?.length >= 10) {
            //     state.shift();
            // }
        Object.assign(state,action.payload)
        }

    },
});

export const {cacheResults}=searchSlice.actions;
export default searchSlice.reducer;
