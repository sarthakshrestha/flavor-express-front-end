import axios from "axios";

// Create an instance of Axios
const axiosInstance = axios.create();

// Request interceptor: Add authorization header if user data is available in local storage
axiosInstance.interceptors.request.use(
    (config) => {
        // Retrieve user data from local storage
        const userToken = JSON.parse(localStorage.getItem("FlavorExpressUserToken"));


        if (userToken) {
            // Add the access token to the request headers
            config.headers["Authorization"] = `Bearer ${userToken}`;
        }
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

// Response interceptor: Handle specific error cases and redirect on 404
axiosInstance.interceptors.response.use(
    (response) => {
        // Return the response as is
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 404) {
            // Redirect to the homepage if a 404 error occurs
            //window.location.href = "/";
            return Promise.reject(error);
        }
        // Return the error for other cases
        return Promise.reject(error);
    }
);

// Export the Axios instance with interceptors
export default axiosInstance;