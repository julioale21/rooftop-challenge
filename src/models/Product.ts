interface Offer {
  price: number;
  expires_at: string;
}

export default interface Product {
  id: number;
  title: string;
  currency: string;
  price: string;
  offer: Offer;
  images: string[];
}
