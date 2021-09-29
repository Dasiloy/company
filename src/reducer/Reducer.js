import { ADD_COMMENTS } from "./Actions";

const Reducer = (state, action) => {
  if (action.type === ADD_COMMENTS) {
    return {
      ...state,
      Comments: [...state.Comments, action.payload],
    };
  }
  return state;
};

export default Reducer;
