export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface Category {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: Category;
  stock: number;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface Bank {
  _id: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  _id: string;
  paymentProof: string;
  status: "pending" | "paid" | "rejected";
  purchasedItems: {
    productId: Product;
    qty: number;
  }[];
  totalPayment: string;
  customerName: string;
  customerContact: number | null;
  customerAddress: string;
  createdAt: string;
  updatedAt: string;
}
