
import {create} from 'zustand';

const useStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({
    cart: [...state.cart, product],
  })),
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id !== productId),
  })),
  clearCart: () => set({ cart: [] }),
  totalPrice: () => set((state) => ({
    total: state.cart.reduce((acc, item) => acc + item.price, 0),
  })),
}));

export default useStore;
