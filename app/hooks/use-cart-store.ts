import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../types";

export interface CartItem extends Product {
  qty: number;
}

export interface CustomerInfo {
  customerName: string;
  customerContact: number | null;
  customerAddress: string;
}

interface CartStore {
  customerInfo: CustomerInfo | null;
  items: CartItem[];
  setCustomerInfo: (info: CustomerInfo) => void;
  addItem: (product: Product, qty?: number) => void;
  removeItem: (productId: string) => void;
  reset: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      customerInfo: null,
      items: [],
      setCustomerInfo: (info) => {
        set({ customerInfo: info });
      },
      addItem: (product, qty = 1) => {
        const items = get().items;
        const existingItem = items.find((item) => item._id === product._id);

        if (existingItem) {
          set({
            items: items.map((item) =>
              item._id === product._id ? { ...item, qty: item.qty + qty } : item
            ),
          });
        } else {
          set({ items: [...items, { ...product, qty }] });
        }
      },
      removeItem: (productId) => {
        set({ items: get().items.filter((item) => item._id !== productId) });
      },
      reset: () => {
        set({ items: [], customerInfo: null });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
