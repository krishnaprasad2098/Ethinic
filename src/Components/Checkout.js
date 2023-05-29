import React from "react";
import { Link } from "react-router-dom";
import checkoutimg from "./assets/checkout.jpg";
import Navbar from "./Navbar";
import "./Checkout.css";
const Checkout = () => {
  return (
    <div className="body">
      <Navbar />
      <div className="image-container">
        <img src={checkoutimg} alt="Order Placed Image" />
      </div>
      <h1>Your Order Has Been Placed</h1>
      <div className="continue-shopping">
        <Link to="/Home">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
