import { Action } from "redux";
import Product from "../models/Product";
import Question from "../models/Question";

export default interface IAction extends Action {
  type: string;
  payload: {
    products: Product[];
    selectedProduct: Product;
    questions: Question[];
    isLoading: boolean;
  };
}
