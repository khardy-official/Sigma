import { createSlice } from "@reduxjs/toolkit";

const calcCoutProduct = (state) => {
    state.countProducts = state.allProducts.filter(item => !isNaN(item.count)).reduce((sum, item) => item.count + sum, 0)
}

const initialState = {
    allProducts: [],
    countProducts: 0,
    totalCost: 0,
    discount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const findProduct = state.allProducts.find((obj) => obj._id === action.payload._id);
            if (findProduct) {
                findProduct.count += action.payload.count;
            } else {
                state.allProducts.push({
                    ...action.payload,
                    count: action.payload.count,
                });
            }
            calcCoutProduct(state);
        },
        changeCountProduct: (state, action) => {
            console.log(action.payload)
            const findProduct = state.allProducts.find((obj) => obj._id === action.payload._id);
            findProduct.count = action.payload.count;

            calcCoutProduct(state);
        },
        removeProduct: (state, action) => {
            state.allProducts = state.allProducts.filter((item) => item._id !== action.payload);

            calcCoutProduct(state);
        },
    }
})

export const { addProductToCart, changeCountProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;