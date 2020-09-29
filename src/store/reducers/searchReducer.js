import immer from "immer";

import {
  LOAD_SEARCH_RESULT_REQUEST,
  LOAD_SEARCH_RESULT_SUCCESS,
  LOAD_SEARCH_RESULT_FAILURE,
} from "../actions/searchAction";

const initialState = {
  posts: [],
  hasMorePosts: true,
  totalCount: null,
};

const SearchReducer = (state = initialState, action) =>
  immer(state, (draft) => {
    switch (action.type) {
      case LOAD_SEARCH_RESULT_REQUEST: {
        break;
      }
      case LOAD_SEARCH_RESULT_SUCCESS: {
        if (action.data.length === 0) {
          draft.posts = [];
          draft.totalCount = action.totalCount;
          draft.hasMorePosts = false;
          break;
        }
        draft.hasMorePosts = action.data.length === 20;
        draft.posts.push(...action.data);
        draft.totalCount = action.totalCount;
        break;
      }
      case LOAD_SEARCH_RESULT_FAILURE: {
        console.error(action.data);
        break;
      }
      default:
        break;
    }
  });

export default SearchReducer;
