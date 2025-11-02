import type { CartItem } from "../types/cart-item";
import { setServerCart } from "../utils/cookies"

export const setCartState = async (cart: CartItem[]) => {
    await setServerCart(cart)
};
