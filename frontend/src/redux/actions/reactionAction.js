import axios from "axios";
import { GET_NB_REACTIONS, REACT_SAVED, RESET_REACT_SAVED } from "./types";

export const getNbReactions = (id) => {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:5000/pi/reactRoute/nbreact/" + id)
      .then((res) => {
        dispatch({ type: GET_NB_REACTIONS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const createReaction = (reaction) => {
  return async (dispatch) => {
    try {
      return await axios
        .post("http://localhost:5000/pi/reactRoute/react", reaction)
        .then((res) => dispatch({ type: REACT_SAVED, payload: res.data }));
    } catch (e) {
      console.log(e);
    }
  };
};

export const resetreactSaved = () => ({ type: RESET_REACT_SAVED });
