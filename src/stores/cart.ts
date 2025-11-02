import { defineStore } from "pinia";
import type { CartItem } from "../types/cart-item";

type CartState = {
    cart: CartItem[];
    shippingZipcode: string;
    shippingCost: number;
    shippingDays: number;
    selectedAddressId: number | null;
};

export const useCartStore = defineStore("cart", {
    state: (): CartState => ({
        cart: [],
        shippingZipcode: "",
        shippingCost: 0,
        shippingDays: 0,
        selectedAddressId: null,
    }),

    actions: {
        addItem({ productId, quantity }: CartItem) {
            const existing = this.cart.find((item) => item.productId === productId);

            if (existing) {
                this.cart = this.cart.map((item) =>
                    item.productId === productId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                this.cart = [...this.cart, { productId, quantity }];
            }
        },

        removeItem(productId: string | number) {
            this.cart = this.cart.filter((item) => item.productId !== productId);
        },

        updateQuantity(productId: string | number, quantity: number) {
            const item = this.cart.find((item) => item.productId === productId);
            if (item) item.quantity = quantity;
            return item
        },

        setShippingZipcode(zipcode: string) {
            this.shippingZipcode = zipcode;
        },

        setShippingCost(cost: number) {
            this.shippingCost = cost;
        },

        setShippingDays(days: number) {
            this.shippingDays = days;
        },

        setSelectedAddressId(id: number | null) {
            this.selectedAddressId = id;
        },

        clearCart() {
            this.cart = [];
        },

        clearShipping() {
            this.shippingZipcode = "";
            this.shippingCost = 0;
            this.shippingDays = 0;
            this.selectedAddressId = null;
        },
    },
});
