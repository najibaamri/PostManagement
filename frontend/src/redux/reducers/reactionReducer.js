import { GET_NB_REACTIONS, REACT_SAVED, RESET_REACT_SAVED } from "../actions/types";

const initialState = { nbReactions: 0, saved: false };

export default function reactionReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NB_REACTIONS:
      state = { ...state, nbReactions: action.payload.result };
      return state;
    case REACT_SAVED:
      return { ...state, saved: true };
    case RESET_REACT_SAVED:
      return { ...state, saved: false };
    default:
      return state;
  }
}
