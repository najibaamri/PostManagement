import axios from "axios";
import { GET_POSTS, DELETE_POST, POST_SAVED, RESET_SAVED, POST_UPDATED } from "./types";

export const getPosts = () => {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:5000/pi/postRoute/post")
      .then((res) => {
        dispatch({ type: GET_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete("http://localhost:5000/pi/postRoute/post/" + postId);

      dispatch({ type: DELETE_POST, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createPost = (post) => {
  return async (dispatch) => {
    try {
      return await axios
        .post("http://localhost:5000/pi/postRoute/post", post)
        .then((res) => dispatch({ type: POST_SAVED, payload: res.data }));
    } catch (e) {
      console.log(e);
    }
  };
};

export const updatePost = (postId, post) => {
  return async (dispatch) => {
    try {
      const res = await axios.put("http://localhost:5000/pi/postRoute/post/" + postId, post);

      dispatch({ type: POST_UPDATED, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const resetSaved = () => ({ type: RESET_SAVED });
