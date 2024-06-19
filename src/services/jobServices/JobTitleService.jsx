import axios from "axios";

const BASE_URL = "http://localhost:8080/api/jobTitles";

export const getAllJobTitles = () => {
  return axios
    .get(`${BASE_URL}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const addJobTitle = (jobTitle) => {
  return axios
    .post(`${BASE_URL}/add`, jobTitle)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteJobTitle = (jobTitle) => {
  return axios
    .delete(`${BASE_URL}/delete`, { data: jobTitle })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
