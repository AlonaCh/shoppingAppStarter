import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {  //Can we jast write initialState??
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];//state.cart + action.payload ??
        },
        // imagine the above as a function:
        //imagine it looks like:
        // const addToCart = (state, action) => {
        //setCart([...cart, action.payload]);
        //}
    },
    extraReducers: (builder) => { }
});
//This should be used for reducers
export const { addToCart } = cartSlice.actions  //gives access to that function that is inside reducers

export default cartSlice.reducer;