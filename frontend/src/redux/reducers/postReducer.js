import { GET_POSTS, DELETE_POST, POST_SAVED, RESET_SAVED, POST_UPDATED } from "../actions/types";

const initialState = { posts: [], saved: false, updated: false };

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      state = { ...state, posts: action.payload.posts };
      return state;
    case DELETE_POST:
      state = state.posts.filter((post) => post._id !== action.payload.posts._id);
      return state;
    case POST_SAVED:
      return { ...state, saved: true };
    case POST_UPDATED:
      return { ...state, updated: true };
    case RESET_SAVED:
      return { ...state, saved: false, updated: false };
    default:
      return state;
  }
}
