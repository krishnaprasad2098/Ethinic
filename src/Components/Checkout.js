import React from "react";
import checkoutimg from "./assets/checkout.jpg";
import "./Checkout.css";
const Checkout = () => {
  return (
    <div class="body">
      <div class="image-container">
        <img src={checkoutimg} alt="Order Placed Image" />
      </div>
      <h1>Your Order Has Been Placed</h1>
    </div>
  );
};

export default Checkout;
