import axios from "axios";
const BASE_URL = "http://localhost:8080/api/employeeConfirmEmployers";

export const getAllEmployeeConfirmEmployers = () => {
  return axios.get(BASE_URL);
};
