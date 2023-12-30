"use client"
import { createContext, ReactNode, useContext, useState } from "react"
import  Cart  from "@/components/Cart"
import  useLocalStorage  from "../hooks/useLocalStorage"

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
}

type ShoppingCartContext = {
    cartItems: CartItem[];
    removeFromCart: (id: number) => void;
    addToCart: (item: CartItem) => void;
    
  };
  

const ShoppingCartContext = createContext({} as ShoppingCartContext)
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
  }


 export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
    const removeFromCart = (id: number) => {
      setCartItems((currItems) => {
        return currItems.filter((item) => item.id !== id);
      });
    };
  
    const addToCart = (item: CartItem) => {
      setCartItems((currItems) => [...currItems, item]);
    };
    return (
      <ShoppingCartContext.Provider value={{ cartItems, removeFromCart, addToCart }}>
        {children}
      </ShoppingCartContext.Provider>
    );
  };
  