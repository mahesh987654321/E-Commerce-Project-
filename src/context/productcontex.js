import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext } from "react";

const AppContext = createContext();
const API = `https://api.pujakaitem.com/api/products`;
const AppProvider = ({ children }) => {
  const getProducts = async (url) => {
    const res = await axios.get(url);
    const { data } = res
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
