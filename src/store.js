import { configureStore } from "@reduxjs/toolkit";

import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import videoSlice from "./videoSlice";

export const store = configureStore({
    reducer:{
        app:appSlice,
        video:videoSlice,
        chat:chatSlice,
    }
})