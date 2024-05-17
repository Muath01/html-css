"use client";
import { useEffect } from "react";
import React from "react";

import { loadStripe } from "@stripe/stripe-js";

function Checkout({ amount }: { amount: string }) {
  const getSuccessURL = () => {
    // Determine the success URL based on the environment or configuration
    if (process.env.NODE_ENV === "development") {
      return "http://localhost:3000/";
    } else {
      // Replace this with the production URL
      return "https://qtink.com";
    }
  };

  //   const navigate = useNavigate();
  localStorage.setItem("productId", JSON.stringify(amount));

  useEffect(() => {
    const redirectToCheckout = async () => {
      const stripe = await loadStripe(
        "pk_test_51LJDOjGFwRQBDdF4XITXzBVWxK72genu1MHAFxH6KOjUXzUq8eKqfe6mtTOU5GSFXJ8O7GJEO5wr1QC1ALZcsobz00DES41OcW"
      );

      const { error }: any = await stripe?.redirectToCheckout({
        lineItems: [
          { price: amount, quantity: 1 },
          // Add more line items if needed
        ],
        mode: "payment",
        successUrl: `${getSuccessURL()}/complete/chart`,
        cancelUrl: `${getSuccessURL()}/complete/payment`,
      });

      if (error) {
        console.error("Error redirecting to checkout:", error);
      }
    };

    redirectToCheckout();
  }, []);

  return (
    <div>
      {/* You can add loading or other UI elements here */}
      Redirecting to Stripe Checkout...
    </div>
  );
}

export default Checkout;
