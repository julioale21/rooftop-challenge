import {
  FETCH_PRODUCTS,
  FETCH_QUESTIONS,
  SEND_QUESTION,
  SET_ISLOADING,
  SET_SELECTED_PRODUCT,
} from "./actionsTypes";
import { Dispatch } from "redux";
import ProductsService from "../ProductsService";
import Product from "../../models/Product";
import Question from "../../models/Question";

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

export const setSelectedProduct = (selectedProduct?: Product) => async (dispatch: Dispatch) => {
  dispatch({
    type: SET_SELECTED_PRODUCT,
    payload: { selectedProduct },
  });
};

export const fetchQuestions = (product_id: number) => async (dispatch: Dispatch) => {
  ProductsService.fetchQuestions(product_id)
    .then((questions) => {
      dispatch({
        type: FETCH_QUESTIONS,
        payload: { questions },
      });
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const sendQuestion =
  (question: Question) =>
  async (dispatch: Dispatch): Promise<number> => {
    try {
      const status = await ProductsService.sendQuestion(question);

      if (status === 201) {
        dispatch({
          type: SEND_QUESTION,
        });

        return Promise.resolve(status);
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      throw new Error(error);
    }
  };
