import { ADD_COMMENTS, FETCH_BLOGS } from "./Actions";

const Reducer = (state, action) => {
  if (action.type === ADD_COMMENTS) {
    return {
      ...state,
      Comments: [...state.Comments, action.payload],
    };
  }
  if (action.type === FETCH_BLOGS) {
    const newBlogs = action.payload;
    return {
      ...state,
      Blogs: [...state.Blogs, ...newBlogs],
      isPageLoading: false,
    };
  }
  return state;
};

export default Reducer;
