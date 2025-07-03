import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart } =
    useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="selected item" />
                  <p>{item.name}</p>
                  <p>₦{item.price}</p>
                  <p>
                    <span
                      onClick={() => removeFromCart(item._id)}
                      className="reduce"
                    >
                      -
                    </span>
                    {cartItems[item._id]}
                    <span
                      onClick={() => addToCart(item._id)}
                      className="increase"
                    >
                      +
                    </span>
                  </p>
                  <p>₦{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
