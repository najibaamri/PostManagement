import axios from "axios";
import { GET_JOBS, DELETE_JOB, SEARCH_JOBS, GET_JOBSTAT } from "./types";

export const getJobs = () => {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:5000/pi/postRoute/job")
      .then((res) => {
        dispatch({ type: GET_JOBS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteJob = (jobId) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete("http://localhost:5000/pi/postRoute/job/" + jobId);

      dispatch({ type: DELETE_JOB, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchjobs = (type, searchField) => {
  return async (dispatch) => {
    return await axios
      .get(
        "http://localhost:5000/pi/postRoute/searchjobs?type=" + type + "&searchfield=" + searchField
      )
      .then((res) => {
        dispatch({ type: SEARCH_JOBS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
export const getJobStatics = () => {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:5000/pi/postRoute/nbjob")
      .then((res) => {
        dispatch({ type: GET_JOBSTAT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
