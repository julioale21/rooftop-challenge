import axios from "axios";
import Product from "../models/Product";
import Question from "../models/Question";

const baseURL = "https://rooftop-api-rest-frontend.herokuapp.com";

class ProductsService {
  static async fetchProducts(limit?: number): Promise<Product[]> {
    const response = await axios.get(`${baseURL}/items${limit ? "?limit=" + limit : ""}`);
    const products: Product[] = response.data.items;

    return products;
  }

  static async fetchQuestions(product_id: number): Promise<Question[]> {
    const response = await axios.get(`${baseURL}/questions?item_id=${product_id}`);

    const questions: Question[] = response.data;

    return questions;
  }

  static async sendQuestion(question: Question): Promise<number> {
    const response = await axios.post(
      `${baseURL}/questions`,
      { ...question },
      {
        headers: {
          "Content-Type": "application-json",
        },
      },
    );

    return response.status;
  }
}

export default ProductsService;
