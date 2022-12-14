import { useReducer } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import reducer from "../reducer/filterReducer";
import { useProduceContext } from "./productcontex";

const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: false,
  sorting_value: "lowest",
};
export const FilterContextProvider = ({ children }) => {
  const { products } = useProduceContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const setGridView = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  };
  const setListView = () => {
    dispatch({ type: "SET_LIST_VIEW" });
  };
  useEffect(() => {}, [state.sorting_value]);
  const sorting = () => {
    dispatch({ type: "SORT_ITEM" });
  };
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
