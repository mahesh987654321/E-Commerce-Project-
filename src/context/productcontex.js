import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import reducer from "../reducer/ProductReducer";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProducts: {},
};
const AppContext = createContext();
const API = `https://api.pujakaitem.com/api/products`;
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispatch({ type: "MY_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    }
  };
  const getSingleProducts = async (url) => {
    dispatch({ type: "SET__SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProducts = res.data;
      dispatch({ type: "MY_SINGLE_DATA", payload: singleProducts });
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR" });
    }
  };
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
const useProduceContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProduceContext };
