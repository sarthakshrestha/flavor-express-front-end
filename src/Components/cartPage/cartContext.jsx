import React, {createContext, useContext, useState, useEffect} from "react";

// Create a context for the shopping cart
const CartContext = createContext();

export const calculateTotalNutrition = (cartItems) => {
    return cartItems.reduce(
        (acc, item) => {
            if (item.nutrition) {
                acc.calories += (item.nutrition.calories || 0) * item.quantity;
                acc.protein += (item.nutrition.protein || 0) * item.quantity;
                acc.carbohydrates += (item.nutrition.carbohydrates || 0) * item.quantity;
                acc.fat += (item.nutrition.fat || 0) * item.quantity;
            }
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
export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);

    // Function to add an item to the cart
    const addToCart = (product) => {
        setCartItems((prevCartItems) => {
            if (product.id === "meal_plan") {
                const mealPlanIndex = prevCartItems.findIndex(
                    (item) => item.id === "meal_plan"
                );

                if (mealPlanIndex !== -1) {
                    prevCartItems[mealPlanIndex].quantity += 1;
                    prevCartItems[mealPlanIndex].nutrition = calculateTotalNutrition(
                        prevCartItems[mealPlanIndex]?.items
                    );
                } else {
                    product.plan = 1;
                    return [...prevCartItems, product];
                }
            } else {
                return [...prevCartItems, product];
            }

            return [...prevCartItems];
        });
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.id !== itemId)
        );
    };

    // Function to increment the quantity of an item in the cart
    const incrementQuantity = (productId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.id === productId ? {...item, quantity: item.quantity + 1} : item
            )
        );
    };

    // Function to decrement the quantity of an item in the cart
    const decrementQuantity = (productId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.id === productId && item.quantity > 1
                    ? {...item, quantity: item.quantity - 1}
                    : item
            )
        );
    };

    useEffect(() => {
        const storedCartItems = localStorage.getItem("cartItems");
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []); // Make sure to include an empty dependency array to run this effect only once when the component mounts.

    // Function to save cart items to local storage when the cart changes
    useEffect(() => {
        // console.log(cartItems);
        if (cartItems?.length) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    }, [cartItems]);


    // Calculate the total nutrition based on cart items
    const totalNutrition = calculateTotalNutrition(cartItems);

    // Create the value object to provide to the context
    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        totalNutrition,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}