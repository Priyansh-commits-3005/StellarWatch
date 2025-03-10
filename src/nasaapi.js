import axios from "axios";

const nasaEndpoint = "https://api.nasa.gov/";
const nasaApiKey = "IPD7jZxNDE9H7ruGivXufcbS8ml4jWoe1ccsHnVw";

axios.interceptors.request.use(
  (config) => {
    config.params = config.params ? config.params : {};
    const configUrl = config.url;
    if (configUrl.includes(nasaEndpoint)) {
      config.params["api_key"] = nasaApiKey;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {
  getApod() {
    return axios.get(`${nasaEndpoint}planetary/apod`);
  },
};
