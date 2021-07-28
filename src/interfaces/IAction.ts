import { Action } from "redux";

export default interface IAction extends Action {
  type: string;
  payload: {
    products: [];
    selectedProduct: object;
    questions: number;
  };
}
