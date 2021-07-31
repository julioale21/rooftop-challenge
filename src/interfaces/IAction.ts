import { Action } from "redux";
import Product from "../models/Product";

export default interface IAction extends Action {
  type: string;
  payload: {
    products: Product[];
    selectedProduct: Product;
    questions: number;
    isLoading: boolean;
  };
}
