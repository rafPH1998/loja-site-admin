import { onMounted } from 'vue'
import { useCartStore } from '../stores/cart'
import { getCartState } from '../actions/get-cart-state'

export function useStoreHydration() {
  const cartStore = useCartStore()

  onMounted(async () => {
    const cart = await getCartState()

    if (cart.length > 0) {
      cartStore.$patch({ cart })
    }
  })
}