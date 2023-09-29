import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = ({ amountValue }) => {
    return (
        <PayPalScriptProvider
            options={{
                "client-id":
                    "AZ5SdwLqzq7xb1whqDUU5yZvScZ3NT3TaQbG83bmLlKK8Mogn8zlJI0hIR2w_BiEYoKkCSu2h-EXl4Ht",
            }}
        >
            <div>
                <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) => {
                        // Replace with your order creation logic
                        return actions.order.create({
                            purchase_units: [
                                {
                                    description: "Your Product",
                                    amount: {
                                        currency_code: "USD",
                                        value: amountValue, // Replace with your product price as a string
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        // Handle the payment confirmation here
                        return actions.order.capture().then(function (details) {
                            alert(
                                "Transaction completed by " + details.payer.name.given_name
                            );
                        });
                    }}
                />
            </div>
        </PayPalScriptProvider>
    );
};

export default Checkout;