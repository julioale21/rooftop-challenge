import { Action } from "redux";
interface IAction extends Action {
  type: string;
  payload: {
    products: [];
    selectedProduct: object;
    questions: number;
  };
}

interface IState {
  products: [];
  selectedProduct: object;
  questions: [];
}

const INITIAL_STATE: IState = {
  products: [],
  selectedProduct: {},
  questions: [],
};

const shopReducer = (state = INITIAL_STATE, action: IAction): IState => {
  switch (action.type) {
    case "":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default shopReducer;
