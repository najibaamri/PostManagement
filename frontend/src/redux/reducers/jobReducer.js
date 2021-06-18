import { GET_JOBS, DELETE_JOB, SEARCH_JOBS, GET_JOBSTAT } from "../actions/types";

const initialState = { jobs: [], statjobs: [] };

export default function jobReducer(state = initialState, action) {
  switch (action.type) {
    case GET_JOBS:
      state = { ...state, jobs: action.payload.jobs };
      return state;
    case DELETE_JOB:
      state = state.jobs.filter((job) => job._id !== action.payload.jobs._id);
      return state;
    case SEARCH_JOBS:
      state = { ...state, jobs: action.payload.jobs };
      return state;
    case GET_JOBSTAT:
      state = { ...state, statjobs: action.payload.nbjobs };
      return state;
    default:
      return state;
  }
}
