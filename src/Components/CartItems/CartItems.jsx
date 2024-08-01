import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assests/cart_cross_icon.png";
import tick from "../Assests/tick.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to open the popup
  const togglePopup = async () => {
    setIsPopupOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    // localStorage.removeItem("auth-token");
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={e.image}
                  alt="icon"
                  className="carticon-product-icon"
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  alt="icon"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button type="submit" className="btn" onClick={togglePopup}>
            PROCEED TO CHECKOUT
          </button>
          <div className={`popup ${isPopupOpen ? "open-popup" : ""}`}>
            <img src={tick} alt="icon" />
            <h2>Thank You!</h2>
            <p>Your order has been placed successfully.</p>
            <button type="button" onClick={closePopup}>
              OK
            </button>
          </div>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
