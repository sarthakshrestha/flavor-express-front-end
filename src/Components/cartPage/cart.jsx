import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Header from "../../sharedComponents/header/Header";
import Footer from "../../sharedComponents/footer/Footer";
import "./cartPage.css";

export default function Cart() {

    const [promoCode, setPromoCode] = useState("");

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            photo: 'coffee.png',
            name: 'Food Item 1',
            description: 'Delicious food item with a great taste.',
            allergy: 'Contains Dairy Product',
            quantity: 2,
            price: 10.99,
        },
        {
            id: 2,
            photo: 'pizza.png',
            name: 'Food Item 2',
            description: 'Another tasty food item for your enjoyment.',
            allergy: 'Contains Soy',
            quantity: 3,
            price: 8.49,
        },
    ]);

    //Create a async function to load cart items from backend

    useEffect(() => {
        //call above function from here
        console.log("hello")
    }, []);

    const incrementQuantity = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handlePromoCodeChange = (event) => {
        setPromoCode(event.target.value);
    };

    const decrementQuantity = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };


    return (<>
            <Header/>
            <div className="cartHeading">
                <h2>Welcome to</h2>
                <h2>Your Cart</h2>
            </div>
            <div className="nutritional-breakdown">
                <h1 className="n-heading">Nutritional Breakdown</h1>
                <div className="nutrient">
                    <span className="nutrient-protein">Protein:</span>
                    <span className="nutrient-value">20g</span>
                </div>
                <div className="nutrient">
                    <span className="nutrient-sugar">Sugar:</span>
                    <span className="nutrient-value">10g</span>
                </div>
                <div className="nutrient">
                    <span className="nutrient-sodium">Sodium:</span>
                    <span className="nutrient-value">500mg</span>
                </div>
                <div className="nutrient">
                    <span className="nutrient-carb">Carbohydrates:</span>
                    <span className="nutrient-value">30g</span>
                </div>
                <div className="nutrient">
                    <span className="nutrient-total">Total Calories:</span>
                    <span className="nutrient-total-cal">250</span>
                </div>
            </div>
            <div className="food-cart">
                <table className="food-table">
                    <thead>
                    <tr className="first-row">
                        <th>S.N</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((item, index) => (
                        <tr className="table-row" key={item.id}>
                            <td>{index + 1}</td>
                            <td>
                                <img
                                    className="food-image"
                                    src={require(`./images/${item.photo}`)}
                                    alt={item.name}
                                />
                            </td>
                            <td>
                                <div className="cart-items"> {/* Updated class name */}
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <p className="allergy">Allergies: {item.allergy}</p>
                                    <br/>
                                    <button className="remove-item">Remove Items</button>
                                </div>
                            </td>
                            <td>
                                    <button
                                        className="quantity-button"
                                        onClick={() => decrementQuantity(item.id)}
                                    >
                                        -
                                    </button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button
                                        className="quantity-button"
                                        onClick={() => incrementQuantity(item.id)}
                                    >
                                        +
                                    </button>
                            </td>
                            <td className="price-td">${item.price.toFixed(2)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <hr className="rounded"></hr>
            </div>
        <div className="calculation">
            <h1>Your Total: </h1>
            <p>Note: 5% is for the delivery charge</p>
        </div>
        <hr className="rounded-bar"></hr>
        <div className="promo-code-box">
            <input
                type="text"
                placeholder="Enter Your Promo Code"
                value={promoCode}
                onChange={handlePromoCodeChange}
                className="promo-code-input"
            />
            <button className="apply-promo-button">Apply</button>
        </div>
            <Footer/>
        </>)
}