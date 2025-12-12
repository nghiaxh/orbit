import axios from "axios";

const ApiClient = (baseUrl) => {
    const apiClient = axios.create({
        baseURL: baseUrl,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
    return apiClient;
};

export default ApiClient;