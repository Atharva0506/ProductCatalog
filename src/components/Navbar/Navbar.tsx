"use client";
import React from "react";
import { IoCart } from "react-icons/io5";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useShoppingCart } from "@/context/ShoppingCartContext";

function Navbar() {
  const { cartItems ,total} = useShoppingCart();
  return (
    <nav>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="util">
        <Link to="/cart" >
          <p className="cart">
            <IoCart />
            &nbsp;
            {cartItems?.length > 0 &&  <span> {"₹"+total} ({cartItems.length})</span>}
          </p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
