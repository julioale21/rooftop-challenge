import Product from "../models/Product";

export default interface IState {
  products: Product[];
  selectedProduct: Product;
  questions: [];
  isLoading: boolean;
}
