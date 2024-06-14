import axios from "axios";

const BASE_URL = "http://localhost:8080/api/candidates";

export const getAllCandidates = () => {
  return axios.get(`${BASE_URL}/getall`);
};

export const registerCandidate = (candidate) => {
  return axios.post(`${BASE_URL}/register`, candidate);
};

export const verifyEmail = (token) => {
  return axios.get(`${BASE_URL}/verify-email`, { params: { token } });
};

export const uploadPhoto = (file, candidateId) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("candidateId", candidateId);
  return axios.post(`${BASE_URL}/uploadPhoto`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateGithubAddress = (candidateId, githubAddress) => {
  return axios.put(`${BASE_URL}/${candidateId}/github`, null, {
    params: { githubAddress },
  });
};

export const getCandidateCv = (candidateId) => {
  return axios.get(`${BASE_URL}/${candidateId}/cv`);
};
