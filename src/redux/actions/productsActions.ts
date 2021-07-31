import { FETCH_PRODUCTS, SET_ISLOADING } from "./actionsTypes";
import { Dispatch } from "redux";
import ProductsService from "../ProductsService";

const setIsLoading = (isLoading: boolean, dispatch: Dispatch) => {
  dispatch({
    type: SET_ISLOADING,
    payload: {
      isLoading,
    },
  });
};

export const fetchProducts = (limit?: number) => async (dispatch: Dispatch) => {
  setIsLoading(true, dispatch);
  ProductsService.fetchProducts(limit).then((products) => {
    setIsLoading(false, dispatch);
    dispatch({
      type: FETCH_PRODUCTS,
      payload: { products },
    });
  });
};
