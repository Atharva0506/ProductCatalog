"use client"
import React from "react";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import "./navbar.css";
import { useShoppingCart } from "@/context/ShoppingCartContext";

function Navbar() {
  const { cartItems } = useShoppingCart();
console.log(cartItems);
  return (
    <nav>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="util">
        <p>
          <IoMdSearch />
        </p>
  
          <p className="cart">
            <IoCart />
            &nbsp;
            {"₹" + 12}
            {cartItems?.length > 0 && <span>({cartItems.length})</span>}
          </p>
       
      </div>
    </nav>
  );
}

export default Navbar;

