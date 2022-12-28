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
    fullProductsList: [],
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
            state.fullProductsList = action.payload;
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
    },
    reducers: {
        searchItem: (state, action) => {
            state.products = state.fullProductsList;
            let searchTerm = action.payload;
            state.products = state.products.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }
    }
});

export const { searchItem } = productsSlice.actions;

export default productsSlice.reducer;