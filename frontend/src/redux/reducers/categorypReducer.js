import {
  GET_CATEGORIESP,
  DELETE_CATEGORYP,
  CATEGORYP_SAVED,
  RESETCAT_SAVED,
  CATP_UPDATED,
} from "../actions/types";

const initialState = { categories: [], saved: false, updated: false };

export default function categorypReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIESP:
      state = { ...state, categories: action.payload.result };
      return state;
    case DELETE_CATEGORYP:
      state = state.categories.filter((cat) => cat._id !== action.payload.categories._id);
      return state;
    case CATEGORYP_SAVED:
      return { ...state, saved: true };
    case CATP_UPDATED:
      return { ...state, updated: true };
    case RESETCAT_SAVED:
      return { ...state, saved: false, updated: false };

    default:
      return state;
  }
}
