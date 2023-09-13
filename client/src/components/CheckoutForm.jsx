// src/components/CheckoutForm.js

import React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

const CheckoutForm = ({ stripe }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a payment intent and charge the customer using the Stripe API.
    const { token } = await stripe.createToken({ name: "Name" });
    // Send the token to your backend for processing.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card Details
        <CardElement />
      </label>
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default injectStripe(CheckoutForm);
