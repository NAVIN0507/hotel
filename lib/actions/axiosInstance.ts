import axios, { AxiosInstance } from "axios";

/**
 * Returns a configured Axios instance with the given token
 * @param token - Bearer token for Authorization header
 * @returns AxiosInstance
 */
const createAxiosInstance = (token: string): AxiosInstance => {
  return axios.create({
    baseURL: "https://portal.brundhavangarden.com/api", // 🔁 Replace with your API base URL
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default createAxiosInstance;
