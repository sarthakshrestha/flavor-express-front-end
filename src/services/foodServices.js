import axios from "axios";

const itemURL = "http://localhost:8081/fooditems/"

export async function getAllFood(){

    const response = await axios.get(itemURL+ "fooditem");
    console.log(response);
    return response.data;
}