import { GET_TOP_CONTRIBUTORS } from "../actions/types";

const initialState = { topusers: [] };

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_CONTRIBUTORS:
      state = { ...state, topusers: action.payload.topusers };
      return state;

    default:
      return state;
  }
}
