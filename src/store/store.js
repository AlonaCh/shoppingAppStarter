import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./productSlice";

export const store = configureStore({ //state
    reducer: {
        product: productReducer,
        cart: cartReducer,
    }
})