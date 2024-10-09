export interface Product {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number;
}

export interface Order {
  payment: string;
  email: string;
  phone: string;
  address: string;
  total: number;
  items: string[];
}

export interface IProductAPI {
  getProduct: () => Promise<Product[]>;
  order: (order: Order) => Promise<Order[]>;
}




