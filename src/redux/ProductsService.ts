import axios from "axios";
import Product from "../models/Product";

const baseURL = "https://rooftop-api-rest-frontend.herokuapp.com/";

class ProductsService {
  static async fetchProducts(limit?: number) {
    const response = await axios.get(`${baseURL}items${limit ? "?limit=" + limit : ""}`);
    const products: Product[] = response.data.items;

    return products;
  }
}

export default ProductsService;
