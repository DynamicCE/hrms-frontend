import axios from "axios";

const BASE_URL = "http://localhost:8080/api/jobPosts";

export const getAllJobPosts = () => {
  return axios
    .get(`${BASE_URL}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const addJobPost = (jobPost) => {
  return axios
    .post(`${BASE_URL}/add`, jobPost)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteJobPost = (jobPost) => {
  return axios
    .delete(`${BASE_URL}/delete`, { data: jobPost })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const findByIsActive = (isActive) => {
  return axios
    .get(`${BASE_URL}/findByIsActive,{isActive}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const findActiveJobPosts = () => {
  return axios
    .get(`${BASE_URL}/findActiveJobPosts`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const findByIsActiveOrderByApplicationDeadline = (isActive) => {
  return axios
    .get(`${BASE_URL}/findByIsActiveOrderByApplicationDeadline,{isActive}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getAllActiveByEmployer = (employerId) => {
  return axios
    .get(`${BASE_URL}/getAllActiveByEmployer,{employerId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const activateJobPost = (jobPost) => {
  return axios
    .put(`${BASE_URL}/activateJobPost`, jobPost)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const deactivateJobPost = (jobPost) => {
  return axios
    .put(`${BASE_URL}/deactivateJobPost`, jobPost)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const findByApplicationDeadlineAfter = (applicationDeadline) => {
  return axios
    .get(`${BASE_URL}/findByApplicationDeadlineAfter,{applicationDeadline}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
