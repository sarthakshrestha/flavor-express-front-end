import React, {useState, useEffect} from "react";
import Sidebar from "../sideBar/sideBar";
import axios from "axios";
import "./restaurantDashboard.css";

function AllRestaurants() {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/restaurants");
                setRestaurants(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data from the API:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const deleteRestaurant = (id) => {
        const deleteUrl = `http://localhost:8080/restaurants/${id}`;

        axios
            .delete(deleteUrl)
            .then((response) => {
                if (response.status === 204) {
                    const updatedRestaurants = restaurants.filter(
                        (restaurant) => restaurant.id !== id
                    );
                    setRestaurants(updatedRestaurants);
                }
            })
            .catch((error) => {
                console.error("Error deleting restaurant:", error);
            });
    };

    return (<>
            <div className="center-container">
                <div className="r-view">
                    <Sidebar/>
                </div>

                <div className="restaurant_info_admin">
                    <div className="admin_header">
                        <h1>All Restaurants</h1>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {restaurants.map((restaurant) => (
                            <tr key={restaurant.id}>
                                <td>{restaurant.id}</td>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.address}</td>
                                <td>{restaurant.phoneNumber}</td>
                                <td>
                                    <button onClick={() => deleteRestaurant(restaurant.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default AllRestaurants;
