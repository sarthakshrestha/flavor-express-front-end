import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for the shopping cart
const CartContext = createContext();

export const calculateTotalNutrition = (cartItems) => {
  return cartItems.reduce(
    (acc, item) => {
      acc.calories += item.nutrition.calories * item.quantity;
      acc.protein += item.nutrition.protein * item.quantity;
      acc.carbohydrates += item.nutrition.carbohydrates * item.quantity;
      acc.fat += item.nutrition.fat * item.quantity;
      return acc;
    },
    {
      calories: 0,
      protein: 0,
      carbohydrates: 0,
      fat: 0,
    }
  );
};

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

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Function to increment the quantity of an item in the cart
  const incrementQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
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

  // Load cart items from local storage when the component initializes
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []); // Make sure to include an empty dependency array to run this effect only once when the component mounts.

  // Function to save cart items to local storage when the cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Calculate the total nutrition based on cart items
  const totalNutrition = calculateTotalNutrition(cartItems);

  // Create the value object to provide to the context
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    calculateTotalPrice,
    incrementQuantity,
    decrementQuantity,
    totalNutrition, // Include totalNutrition in the value object
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
