import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartSlice";

export const MyStore=configureStore({
    reducer:{
        cart:CartSlice.reducer
    }
});