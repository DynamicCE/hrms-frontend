import axios from "axios";

const BASE_URL = "http://localhost:8080/api/employers";

export const getAllEmployers = () => {
  return axios
    .get(`${BASE_URL}/getall`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const addEmployer = (employer) => {
  return axios
    .post(`${BASE_URL}/add`, employer)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getEmployer = (id) => {
  return axios
    .get(`${BASE_URL}/getemployer/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const createEmployer = (employer) => {
  return axios
    .post(`${BASE_URL}/createEmployer`, employer)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const updateEmployer = (employer, id) => {
  return axios
    .put(`${BASE_URL}/updateEmployer/${id}`, employer)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
export const deleteEmployer = (employer) => {
  return axios
    .delete(`${BASE_URL}/delete`, { data: employer })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
export const registerEmployer = (employer) => {
  return axios
    .post(`${BASE_URL}/register`, employer)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const approveEmployer = (employerId) => {
  return axios
    .post(`${BASE_URL}/approveEmployer/${employerId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
