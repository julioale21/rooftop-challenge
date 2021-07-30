import { FETCH_PRODUCTS } from "./actionsTypes";
import { Dispatch } from "redux";
import ProductsService from "../ProductsService";

export const fetchProducts = (limit?: number) => async (dispatch: Dispatch) => {
  ProductsService.fetchProducts(limit).then((products) => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: { products },
    });
  });
};
