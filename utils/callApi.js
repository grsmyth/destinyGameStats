import axios from "axios";

// Change default URL to deployed URL
const baseURL = process.env.NEXT_PUBLIC_API_URL || "DEPLOYED API BASE URL";

const apiToken = process.env.NEXT_PUBLIC_API_KEY;

const defaultAxiosInstance = axios.create({
  baseURL,
  headers: {
    "X-API-Key": apiToken,
  },
});

//Wrapper function for a get call
async function getCall(url, config) {
  try {
    const response = await defaultAxiosInstance.get(url, config);
    return response;
  } catch (error) {
    throw error?.response;
  }
}

//Wrapper function for a post call
async function postCall(url, data, config) {
  try {
    defaultAxiosInstance.defaults.headers.post["Content-Type"] =
      "application/json";
    const response = await defaultAxiosInstance.post(url, data, config);
    return response;
  } catch (error) {
    throw error?.response;
  }
}

export { baseURL, getCall, postCall };
