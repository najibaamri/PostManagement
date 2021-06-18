import axios from "axios";
import { GET_PROBLEMS, DELETE_PROBLEM, GET_LIST_PROBLEMS, GET_PROBLEMSTAT } from "./types";

export const getProblemsByUser = (username) => {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:5000/pi/postRoute/problemsbyuser/" + username)
      .then((res) => {
        dispatch({ type: GET_PROBLEMS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteProblem = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete("http://localhost:5000/pi/postRoute/problem/" + id);

      dispatch({ type: DELETE_PROBLEM, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProblems = () => {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:5000/pi/postRoute/problem")
      .then((res) => {
        dispatch({ type: GET_LIST_PROBLEMS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
export const getProblemStatics = () => {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:5000/pi/postRoute/nbproblems")
      .then((res) => {
        dispatch({ type: GET_PROBLEMSTAT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
