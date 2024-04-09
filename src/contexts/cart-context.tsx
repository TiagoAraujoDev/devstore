"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartContexType {
  items: CartItem[];
  addToCart: (productId: string) => void;
}

export const CartContex = createContext({} as CartContexType);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((productId: string) => {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.productId === productId);

      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...state, { productId, quantity: 1 }];
      }
    });
  }, []);
  return (
    <CartContex.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContex.Provider>
  );
};

const useCart = () => useContext(CartContex);

export { CartProvider, useCart };
