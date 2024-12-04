import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "root",
  initialState: {
    users: [],
    products: [],
    audit: [],
    aux: {},
    state: "",
    error: null,
  },
  reducers: {
    // *USERS
    getAllUsers: (state, action) => {
      state.users = action.payload;
    },

    // *PRODUCTS
    getAllProducts: (state, action) => {
      state.products = action.payload;
    },

    getIdProduct: (state, action) => {
      state.aux = action.payload;
      state.products = [];
    },

    postProduct: (state, action) => {
      state.state = action.payload.state;
      state.products = action.payload.data;
    },

    putProduct: (state, action) => {
      state.aux = action.payload;
    },

    removeProduct: (state, action) => {
      state.state = action.payload;
    },

    clearState: (state, action) => {
      state.state = "";
    },

    clearAux: (state, action) => {
      state.aux = {};
    },

    getAllAudit: (state, action) => {
      state.audit = action.payload;
    },

    errorResponse: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  getAllUsers,
  getAllProducts,
  getIdProduct,
  postProduct,
  putProduct,
  removeProduct,
  clearState,
  clearAux,
  getAllAudit,
  errorResponse,
} = Slice.actions;
export default Slice.reducer;
