import { getServerCart } from "../utils/cookies"

export const getCartState = async () => {
    const cart = await getServerCart()
    return { cart }
};
