import IAction from "../../interfaces/IAction";
import IState from "../../interfaces/IEstate";
import { FETCH_PRODUCTS } from "../actions/actionsTypes";

const INITIAL_STATE: IState = {
  products: [],
  selectedProduct: {},
  questions: [],
};

const productsReducer = (state = INITIAL_STATE, action: IAction): IState => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };

    default:
      return state;
  }
};

export default productsReducer;
