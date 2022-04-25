import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
	name: "client",
	initialState: {
		users: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		//GET ALL
		getClientStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		getClientSuccess: (state, action) => {
			state.isFetching = false;
			state.users = action.payload;
		},
		getClientFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		//DELETE
		deleteClientStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		deleteClientSuccess: (state, action) => {
			state.isFetching = false;
			state.products.splice(
				state.products.findIndex((item) => item._id === action.payload),
				1
			);
		},
		deleteClientFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		//UPDATE
		updateClientStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		updateClientSuccess: (state, action) => {
			state.isFetching = false;
			state.products[
				state.products.findIndex((item) => item._id === action.payload.id)
			] = action.payload.product;
		},
		updateClientFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		//UPDATE
		addClientStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		addClientSuccess: (state, action) => {
			state.isFetching = false;
			state.products.push(action.payload);
		},
		addClientFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});


export const {
	getClientStart,
	getClientSuccess,
	getClientFailure,
	deleteClientStart,
	deleteClientSuccess,
	deleteClientFailure,
	updateClientStart,
	updateClientSuccess,
	updateClientFailure,
	addClientStart,
	addClientSuccess,
	addClientFailure,
} = clientSlice.actions;

export default clientSlice.reducer;