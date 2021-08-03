import { SEND_QUESTION } from "./../actions/actionsTypes";
import IAction from "../../interfaces/IAction";
import IState from "../../interfaces/IEstate";
import Product from "../../models/Product";
import {
  FETCH_PRODUCTS,
  FETCH_QUESTIONS,
  SET_ISLOADING,
  SET_SELECTED_PRODUCT,
} from "../actions/actionsTypes";

const INITIAL_STATE: IState = {
  products: [],
  selectedProduct: {} as Product,
  questions: [],
  isLoading: false,
};

const productsReducer = (state = INITIAL_STATE, action: IAction): IState => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };

    case SET_ISLOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload.selectedProduct,
      };

    case FETCH_QUESTIONS:
      return {
        ...state,
        questions: action.payload.questions,
      };

    case SEND_QUESTION:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default productsReducer;
