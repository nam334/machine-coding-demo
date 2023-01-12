import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"video",
    initialState:{
        videoData:[]
    },
    reducers:{
        addItemToVideo: (state, action) => {
            state.videoData = action.payload
        }
    }
})

export const {addItemToVideo} = videoSlice.actions 
export default videoSlice.reducer 