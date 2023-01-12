import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:'chat',
    initialState:["Namrata: Namaste React..!", "User: Happy new year"],
    reducers:{
        addToChat:(state, action) => {
            state.splice(10,1)
            state = state.unshift(action.payload)
        }
    } 
})

export const {addToChat} = chatSlice.actions 
export default chatSlice.reducer