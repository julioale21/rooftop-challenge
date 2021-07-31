import IAction from "../../interfaces/IAction";
import IState from "../../interfaces/IEstate";
import Product from "../../models/Product";
import { FETCH_PRODUCTS, SET_ISLOADING } from "../actions/actionsTypes";

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

    default:
      return state;
  }
};

export default productsReducer;
