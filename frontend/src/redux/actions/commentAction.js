import axios from "axios";
import { GET_TOP_CONTRIBUTORS } from "./types";

export const getTop6Contrib = () => {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:5000/pi/commentRoute/topContributors")
      .then((res) => {
        dispatch({ type: GET_TOP_CONTRIBUTORS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
