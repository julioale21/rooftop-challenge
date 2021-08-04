import Product from "../models/Product";
import { hasExpired } from "./days";

export const hasCurrentOffer = (product: Product) => {
  let isCurrentOffer = false;
  const today = new Date();

  if (product.offer !== null && !hasExpired(today.toString(), product.offer.expires_at)) {
    isCurrentOffer = true;
  }

  return isCurrentOffer;
};
