import Product from "../models/Product";
import Question from "../models/Question";

export default interface IState {
  products: Product[];
  selectedProduct: Product;
  questions: Question[];
  isLoading: boolean;
}
