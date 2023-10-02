import axios from "axios";

const restaurantURL = "http://localhost:8081/restaurants/"

export async function getAllRestro(){

    const response = await axios.get(restaurantURL+ "getRestaurants");
    console.log(response);
    return response.data;

}