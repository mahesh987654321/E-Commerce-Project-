import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};
const AppContext = createContext();
const API = `https://api.pujakaitem.com/api/products`;
const AppProvider = ({ children }) => {
  const [state, action] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    const res = await axios.get(url);
    const { data } = res;
    console.log(data);
  };
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value="Mahesh Biswas">{children}</AppContext.Provider>
  );
};
const useProduceContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProduceContext };
