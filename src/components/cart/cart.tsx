import React from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import "./cart.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    total,
  } = useShoppingCart();
  const gstValue = 0.18;
  const subtotal = total;
  const gst = subtotal * gstValue;
  const Finaltotal = subtotal + gst;

  return (
    <section className="cart-items">
      <div className="cart-main">
        {cartItems && cartItems.length > 0 ? (
          <>
            <h2>Your Shopping Cart</h2>
            <Table>
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Product Image</Th>
                  <Th>Name</Th>
                  <Th>Quantity</Th>
                  <Th align="right">Subtotal</Th>
                  <Th align="right">GST(18%)</Th>
                  <Th align="right">Total</Th>
                  <Th align="right">Remove Item</Th>
                </Tr>
              </Thead>
              <Tbody>
                {cartItems.map((item, index) => (
                  <Tr key={item.id}>
                    <Td>{index + 1}</Td>
                    <Td>
                      <img src={item.image} alt={item.name} />
                    </Td>
                    <Td>{item.name}</Td>
                    <Td>
                      <button
                        className="btn"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span style={{ margin: "0.5rem" }}>{item.quantity}</span>
                      <button
                        className="btn"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </Td>
                    <Td align="right">
                      ₹{(item.quantity * item.price).toFixed(2)}
                    </Td>
                    <Td align="right">
                      ₹{(item.quantity * item.price * gstValue).toFixed(2)}
                    </Td>
                    <Td align="right">
                      ₹
                      {(
                        item.quantity * item.price +
                        item.quantity * item.price * gstValue
                      ).toFixed(2)}
                    </Td>

                    <Td align="right">
                      <button
                        className="btn btn-primary"
                        onClick={() => removeFromCart(item.id, item.name)}
                      >
                        Remove
                      </button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>

              <Tr>
                <Td colSpan={4} align="right">
                  <b>Cart Totals</b>
                </Td>
                <Td align="right">₹{subtotal.toFixed(2)}</Td>
                <Td align="right">₹{gst.toFixed(2)}</Td>
                <Td align="right">₹{Finaltotal.toFixed(2)}</Td>
                <Td></Td>
              </Tr>
            </Table>
          </>
        ) : (
          <div className="no-item">
            <h2>No items in cart!!</h2>
            <a href="/" className="btn btn-primary">
              Shop Now
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
