const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "MY_API_DATA":
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };
    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET__SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "MY_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProducts: action.payload,
      };
    case "SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
export default ProductReducer;
