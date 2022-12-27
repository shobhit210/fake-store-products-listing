import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productsFetch from '../axios/productsReq';

export const getProductsList = createAsyncThunk(
    "productsList",
    async (thunkAPI) => {
        try {
            const url = `/products`;
            const res = await productsFetch.get(url);
            // console.log("Action Response", res)
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)

export const getProductDetail = createAsyncThunk(
    "productDetail",
    async (id, thunkAPI) => {
        try {
            const url = `/products/${id}`;
            const res = await productsFetch.get(url);
            // console.log("Action Response", res)
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)

const initialState = {
    products: [],
    productDetail: {},
    isLoading: true,
};


const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: {
        [getProductsList.pending]: (state) => {
            state.isLoading = true
        },
        [getProductsList.fulfilled]: (state, action) => {
            // console.log("Reducer Response", action)
            state.products = action.payload;
            state.isLoading = false
        },
        [getProductsList.rejected]: (state) => {
            state.isLoading = false
        },
        [getProductDetail.pending]: (state) => {
            state.isLoading = true
        },
        [getProductDetail.fulfilled]: (state, action) => {
            // console.log("Reducer Response", action)
            state.productDetail = action.payload;
            state.isLoading = false
        },
        [getProductDetail.rejected]: (state) => {
            state.isLoading = false
        },

    }
});

export default productsSlice.reducer;