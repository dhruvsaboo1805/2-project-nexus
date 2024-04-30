import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

export const deliveryFee = 2;

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    getTotalQuantity,
  } = useContext(StoreContext);
  const totalQuantity = getTotalQuantity();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title cart-heading">
          <p className="tags">Items</p>
          <p className="tags">Title</p>
          <p className="tags">Price</p>
          <p className="tags">Quantity</p>
          <p className="tags">Total</p>
          <p className="tags">Remove</p>
        </div>
        <br />
        <hr />
        {totalQuantity === 0 ? (
          <p className="NoItems">No Items in cart</p>
        ) : (
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <React.Fragment key={item._id}>
                  <div
                    className="cart-items-title cart-items-item"
                    key={item._id}
                  >
                    <img src={item.image} alt="food img" />
                    <p className=" tags-cart">{item.name}</p>
                    <p className=" tags-cart">₹{item.price}</p>
                    <p className=" tags-cart">{cartItems[item._id]}</p>
                    <p className=" tags-cart">₹{item.price * cartItems[item._id]}</p>
                    <p
                      className="Remove"
                      onClick={() => removeFromCart(item._id)}
                    >
                      <img
                        src={assets.remove_icon_cross}
                        alt="remove_icon_cross"
                      />
                    </p>
                  </div>
                  <hr key={`hr-${item._id}-${index}`} />
                </React.Fragment>
              );
            }
          })
        )}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2 className="cart-total-heading">Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p className="cart-subtotal">Subtotal</p>
              <p className="cart-subtotal">₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p className="cart-subtotal">Delivery Free</p>
              <p className="cart-subtotal">₹{getTotalCartAmount() === 0 ? 0 : deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b className="final-total">Total</b>
              <b className="final-total">
              ₹
                {getTotalCartAmount() === 0
                  ? 0
                  : getTotalCartAmount() + deliveryFee}
              </b>
            </div>
          </div>
          <button
            disabled={getTotalCartAmount() === 0}
            onClick={() => navigate("/order")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p className="promocode-heading">If you have a promocode, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
