import React, { createContext, useContext, useState } from "react";

// Create a context for the shopping cart
const CartContext = createContext();

// Create a custom hook to access the cart context
export function useCart() {
    return useContext(CartContext);
}

// Create a CartProvider component to wrap your app
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Function to add an item to the cart
    const addToCart = (product) => {
        setCartItems((prevCartItems) => [...prevCartItems, product]);
    };

    // Function to remove an item from the cart
    const removeFromCart = (productId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.id !== productId)
        );
    };

    // Function to clear the entire cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Calculate the total price of items in the cart
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Function to increment the quantity of an item in the cart
    const incrementQuantity = (productId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Function to decrement the quantity of an item in the cart
    const decrementQuantity = (productId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    // Create the value object to provide to the context
    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        calculateTotalPrice,
        incrementQuantity,
        decrementQuantity,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
