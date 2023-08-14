import React from "react";
import ReactDOM from "react-dom";
import { Elements } from "@stripe/react-stripe-js"; // Import Elements from @stripe/react-stripe-js
import { loadStripe } from "@stripe/stripe-js"; // Import loadStripe from @stripe/stripe-js
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

// Replace 'YOUR_STRIPE_PUBLISHABLE_KEY' with your actual publishable key from Stripe
const stripePromise = loadStripe(
  "pk_test_51KVvxhSDOm6pxjPRbQGcraA0GYZNoPdH9mTmbSiipgUm5k6yz73OABm0bEwRqR6MbGEmuQ5amcLjz1hUZGIS8kvc00prTYDhgJ"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* Wrap your App with Elements */}
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </Provider>
);
