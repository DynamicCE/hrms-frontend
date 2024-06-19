import axios from "axios";

const BASE_URL = "http://localhost:8080/api/auth";

export const createToken = (email) => {
  return axios
    .post(`${BASE_URL}/create`, { email })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const validateToken = (token) => {
  return axios
    .get(`${BASE_URL}/validate`, { token })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
