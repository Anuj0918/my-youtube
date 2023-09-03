import { createSlice } from "@reduxjs/toolkit";

const searchSline = createSlice({
    name :"search",
    initialState:{

    },
    reducers:{
        cacheResults: (state,action) =>{
            state = Object.assign(state,action.payload);

        }
    }
})
export const {cacheResults} = searchSline.actions;

export default searchSline.reducer;