import {configureStore, createSlice} from "@reduxjs/toolkit";

const ordersSlice = createSlice({
	name: "order",
	initialState: {
		list: null
	},
	reducers: {
		setOrders: (state, action) => {
			state.list = action.payload;
		},
		addOrder: (state, action) => {
			state.list.push(action.payload);
		},
		removeOrder: (state, action) => {
			state.list = state.list.filter(order => order.id !== action.payload);
		}
	}

});

const productsSlice = createSlice({
	name: "product",
	initialState: {
		list: null
	},

	reducers: {
		setProduct: (state, action) => {
			state.list = action.payload;
		},
		addProduct: (state, action) => {
			state.list.push(action.payload);
		},
		removeProduct: (state, action) => {
			state.list = state.list.filter(order => order.id !== action.payload);
		}
	}
});

export const {setOrders, addOrder, removeOrder} = ordersSlice.actions;
export const {setProduct, addProduct, removeProduct} = productsSlice.actions;

const store = configureStore({
	reducer: {
		orders: ordersSlice.reducer,
		products: productsSlice.reducer
	}
});

export default store;