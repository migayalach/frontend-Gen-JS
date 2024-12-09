import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "root",
  initialState: {
    users: [],
    products: [],
    audit: [],
    level: [],
    aux: {},
    info: {},
    login: {},
    state: "",
    error: null,
  },
  reducers: {
    // *LEVEL
    getAllLevel: (state, action) => {
      state.level = action.payload.results;
    },

    // *USERS
    getAllUsers: (state, action) => {
      state.users = action.payload.results;
      state.info = action.payload.info;
    },
    getUserId: (state, action) => {
      state.aux = action.payload;
    },

    // *PRODUCTS
    getAllProducts: (state, action) => {
      state.products = action.payload.results;
      state.info = action.payload.info;
    },

    getIdProduct: (state, action) => {
      state.aux = action.payload;
      state.products = [];
    },

    postProduct: (state, action) => {
      state.products = action.payload.data.results;
      state.info = action.payload.data.info;
      state.state = action.payload.state;
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

    clearLevel: (state, action) => {
      state.level = [];
    },

    getAllAudit: (state, action) => {
      state.audit = action.payload.results;
      state.info = action.payload.info;
    },

    errorResponse: (state, action) => {
      state.error = action.payload;
    },

    iniciateSession: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const {
  getAllLevel,
  getAllUsers,
  getUserId,
  getAllProducts,
  getIdProduct,
  postProduct,
  putProduct,
  removeProduct,
  clearState,
  clearAux,
  clearLevel,
  getAllAudit,
  errorResponse,
  iniciateSession,
} = Slice.actions;
export default Slice.reducer;
