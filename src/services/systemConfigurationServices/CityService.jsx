import axios from "axios";

const BASE_URL = "http://localhost:8080/api/cities";

export const getAll = () => {
  return axios
    .get(`${BASE_URL}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
