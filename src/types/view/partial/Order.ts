import { ProductData } from "./Product";

export interface OrderData {
  id: string;
  items: ProductData[];
  price: string;
  payment: string;
  address: string;
  email: string;
  phone: string;
}