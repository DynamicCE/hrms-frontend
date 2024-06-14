import axios from "axios";

const BASE_URL = "http://localhost:8080/api/users";

export const findUserByEmail = (email) => {
  return axios
    .get(BASE_URL + "/findByEmail?email=" + email)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const addUser = (user) => {
  return axios
    .post(BASE_URL + "/add", user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const findUsersByEmailContains = (email) => {
  return axios
    .get(BASE_URL + "/findByEmailContains?email=" + email)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const findUsersByEmailStartsWith = (email) => {
  return axios
    .get(BASE_URL + "/findByEmailStartsWith?email=" + email)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const findUsersByEmailEndsWith = (email) => {
  return axios
    .get(BASE_URL + "/findByEmailEndsWith?email=" + email)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const verifyEmail = (token) => {
  return axios
    .get(BASE_URL + "/verifyEmail?token=" + token)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
