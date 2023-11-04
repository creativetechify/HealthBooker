const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Import and configure the Stripe SDK

const appointRouter = express.Router();

appointRouter.get(
  "/getallappointments",
  auth,
  appointmentController.getallappointments
);

appointRouter.post(
  "/bookappointment",
  auth,
  appointmentController.bookappointment
);

appointRouter.put("/completed", auth, appointmentController.completed);

// Route to create a payment intent
router.post("/create-payment", async (req, res) => {
  try {
    // Extract payment details from the request, e.g., amount, currency, and additional details
    const { amount, currency, ...otherPaymentDetails } = req.body;

    // Create a payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      ...otherPaymentDetails,
    });

    // Send the payment intent ID back to the client
    res.json({ success: true, paymentIntent });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, error: "Failed to create payment intent" });
  }
});
//testing

module.exports = router;

module.exports = appointRouter;
