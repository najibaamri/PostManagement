import { GET_PROBLEMS, DELETE_PROBLEM, GET_LIST_PROBLEMS, GET_PROBLEMSTAT } from "../actions/types";

const initialState = { problems: [], list: [], stats: [] };

export default function problemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROBLEMS:
      state = { ...state, problems: action.payload.problems };
      return state;
    case DELETE_PROBLEM:
      state = state.problems.filter((problems) => problems._id !== action.payload.problems._id);
      return state;
    case GET_LIST_PROBLEMS:
      state = { ...state, list: action.payload.problems };
      return state;
    case GET_PROBLEMSTAT:
      state = { ...state, stats: action.payload.nbproblems };
      return state;
    default:
      return state;
  }
}
