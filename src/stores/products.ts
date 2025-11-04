import { defineStore } from "pinia";
import { data } from "../data";
import type { Product } from "../types/product";

export const useProductStore = defineStore("products", {
  state: (): { products: Product[] } => ({
    products: [],
  }),

  actions: {
    async getProductsFromList(ids: number[]) {
      this.products = data.products.filter((p) => ids.includes(p.id));
      return this.products;
    },

    async getProductById(productId: number) {
        return data.products.find(p => p.id === productId);
    }
  },
});
