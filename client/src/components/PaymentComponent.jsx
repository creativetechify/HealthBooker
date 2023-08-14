// PaymentComponent.js

import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const PaymentComponent = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Confirm the payment when the user submits the form
    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error("Error creating payment method:", error);
      return;
    }

    // PaymentMethod created successfully, handle the payment on your server-side here
    console.log("PaymentMethod:", paymentMethod);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment Amount: {amount}</h2>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

export default PaymentComponent;
