import axios from "axios";
import Product from "../models/Product";
import Question from "../models/Question";

const baseURL = "https://rooftop-api-rest-frontend.herokuapp.com/";

class ProductsService {
  static async fetchProducts(limit?: number) {
    const response = await axios.get(`${baseURL}items${limit ? "?limit=" + limit : ""}`);
    const products: Product[] = response.data.items;

    return products;
  }

  static async fetchQuestions(product_id: number) {
    const response = await axios.get(`${baseURL}questions?item_id=${product_id}`);

    const questions: Question[] = response.data;

    return questions;
  }
}

export default ProductsService;
