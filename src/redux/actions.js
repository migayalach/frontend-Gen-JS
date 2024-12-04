import axios from "axios";
import {
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
} from "./slice";
require("dotenv").config();
const URL = `http://localhost:3001/api`;

// *USER
export const getUsersAll = () => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/user`)).data;
      return dispatch(getAllUsers(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

// *AUDIT-USER
export const getAuditUser = () => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/entryExit`)).data;
      return dispatch(getAllAudit(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

// *AUDIT-PRODUCT
export const getAuditProduct = () => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/auditProduct`)).data;
      return dispatch(getAllAudit(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

// *PRODUCT
export const getProductsll = () => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/product`)).data;
      return dispatch(getAllProducts(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const addProduct = (info) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/product`, info)).data;
      return dispatch(postProduct(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const deleteProduct = (idProduct) => {
  return async function (dispatch) {
    try {
      const data = (await axios.delete(`${URL}/product/${idProduct}`)).data;
      return dispatch(removeProduct(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getProductId = (idProduct) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/product/${idProduct}`)).data;
      return dispatch(getIdProduct(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const updateProduct = (info) => {
  return async function (dispatch) {
    try {
      const data = (await axios.put(`${URL}/product`, info)).data;
      return dispatch(putProduct(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

// *CLEAR DATA
export const stateClear = () => {
  return function (dispatch) {
    try {
      return dispatch(clearState());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const auxClear = () => {
  return function (dispatch) {
    try {
      return dispatch(clearAux());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};
