import axios from "axios";
import {
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
} from "./slice";
require("dotenv").config();
const URL = `http://localhost:3001/api`;

// *LEVEL
export const getLevelAll = () => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/level`)).data;
      return dispatch(getAllLevel(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

// *USER
export const getUsersAll = (selectInfo) => {
  return async function (dispatch) {
    try {
      const data = (
        await axios.get(
          `${URL}/user?access=${selectInfo ? selectInfo : "Vendedor"}`
        )
      ).data;
      return dispatch(getAllUsers(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getPageUserAll = (selectInfo, page) => {
  return async function (dispatch) {
    try {
      const data = (
        await axios.get(
          `${URL}/user?access=${
            selectInfo ? selectInfo : "Vendedor"
          }&page=${page}`
        )
      ).data;
      return dispatch(getAllUsers(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getIdUser = (idUser) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/user/${idUser}`)).data;
      return dispatch(getUserId(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const postUsers = (info) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/user`, info)).data;
      localStorage.setItem("login", JSON.stringify(data));
      return dispatch(iniciateSession(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const putUsers = (info) => {
  return async function (dispatch) {
    try {
      (await axios.put(`${URL}/user`, info)).data;
      return;
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

// *AUDIT-USER
export const auditUserOut = (info) => {
  return async function (dispatch) {
    try {
      await axios.post(`${URL}/entryExit`, info);
      localStorage.removeItem("login");
      return;
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

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

export const getPageUsersAudit = (page) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/entryExit?page=${page}`)).data;
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

export const auditProductAction = (info) => {
  return async function (dispatch) {
    try {
      await axios.post(`${URL}/auditProduct`, info);
      return;
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getPageUsersProducts = (page) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/auditProduct?page=${page}`)).data;
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

export const getPageProductsAll = (page) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/product?page=${page}`)).data;
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

export const levelClear = () => {
  return function (dispatch) {
    try {
      return dispatch(clearLevel());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

// *LOGIN
export const loginUser = (info) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/login`, info)).data;
      localStorage.setItem("login", JSON.stringify(data));
      return dispatch(iniciateSession(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const setLoginUser = (info) => {
  return function (dispatch) {
    try {
      return dispatch(iniciateSession(info));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};
