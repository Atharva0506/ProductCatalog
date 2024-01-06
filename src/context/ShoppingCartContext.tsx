import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import toast from "react-hot-toast";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
  price: number;
  name:string;
  image:string;
};

type ShoppingCartContext = {
  cartItems: CartItem[];
  removeFromCart: (id: number,name:string) => void;
  addToCart: (item: CartItem) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  total: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const removeFromCart = (id: number,name:string) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
    toast(`${name} removed from cart`, {
      icon: "✅",
      style: {
        borderRadius: "10px",
        background: "var(--color-primary)",
        color: "var(--color-white)",
      },
    });
  };

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      increaseQuantity(existingItem.id);
    } else {
      setCartItems((currItems) => [...currItems, { ...item, quantity: 1 }]);
      calculateTotal(cartItems);
      toast(`${item.name} added to cart`, {
        icon: "✅",
        style: {
          borderRadius: "10px",
          background: "var(--color-primary)",
          color: "var(--color-white)",
        },
      });
    }
  };

  const increaseQuantity = (id: number) => {
    setCartItems((currItems) => {
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((currItems) => {
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(item.quantity - 1, 1) };
        }
        return item;
      });
    });
  };
  0;

  const calculateTotal = (cartItems: CartItem[]): number => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    return Number(total.toFixed(2));
  };
  const total = calculateTotal(cartItems);
  return (
    <ShoppingCartContext.Provider
      value={{
        removeFromCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        cartItems,
        total,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
