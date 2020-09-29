import immer from "immer";

// action
import {
  TRENDING_POSTS_LOAD_REQUEST,
  TRENDING_POSTS_LOAD_SUCCESS,
  TRENDING_POSTS_LOAD_FAILURE,
} from "store/actions/postAction";
// 최신 게시글 load action
import {
  RECENT_POSTS_LOAD_REQUEST,
  RECENT_POSTS_LOAD_SUCCESS,
  RECENT_POSTS_LOAD_FAILURE,
} from "store/actions/postAction";
// 공지사항 load action
import {
  NOTICE_LOAD_REQUEST,
  NOTICE_LOAD_SUCCESS,
  NOTICE_LOAD_FAILURE,
} from "store/actions/postAction";
// 인기 태그 load action
import {
  POPULAR_TAGS_LOAD_REQUEST,
  POPULAR_TAGS_LOAD_SUCCESS,
  POPULAR_TAGS_LOAD_FAILURE,
} from "store/actions/postAction";
// 이름순 태그 load action
import {
  ALPHABET_TAGS_LOAD_REQUEST,
  ALPHABET_TAGS_LOAD_SUCCESS,
  ALPHABET_TAGS_LOAD_FAILURE,
} from "store/actions/postAction";

const initialState = {
  posts: [],
  notices: [],
  popularTags: [],
  alphabetTags: [],
  hasMorePopularTags: true,
  hasMoreAlphabetTags: true,
  recentPosts: [],
  hasMorePosts: true,
  hasMoreRecentPosts: true,
  showPostFallback: false,
  showTagsFallback: false,
};

const PostReducer = (state = initialState, action) => immer(state, (draft) => {
  switch (action.type) {
    case TRENDING_POSTS_LOAD_REQUEST: {
      draft.showPostFallback = false;
      break;
    }
    case TRENDING_POSTS_LOAD_SUCCESS: {
      draft.hasMorePosts = action.data.length === 20;
      draft.posts.push(...action.data);
      draft.showPostFallback = true;
      break;
    }
    case TRENDING_POSTS_LOAD_FAILURE: {
      draft.showPostFallback = false;
      break;
    }
    case RECENT_POSTS_LOAD_REQUEST: {
      draft.showPostFallback = false;
      break;
    }
    case RECENT_POSTS_LOAD_SUCCESS: {
      draft.hasMoreRecentPosts = action.data.length === 20;
      draft.recentPosts.push(...action.data);
      draft.showPostFallback = true;
      break;
    }
    case RECENT_POSTS_LOAD_FAILURE: {
      draft.showPostFallback = false;
      break;
    }
    case NOTICE_LOAD_REQUEST: {
      break;
    }
    case NOTICE_LOAD_SUCCESS: {
      draft.notices = action.data;
      break;
    }
    case NOTICE_LOAD_FAILURE: {
      break;
    }
    case POPULAR_TAGS_LOAD_REQUEST: {
      draft.showTagsFallback = false;
      break;
    }
    case POPULAR_TAGS_LOAD_SUCCESS: {
      draft.hasMorePopularTags = action.data.length === 120;
      draft.popularTags.push(...action.data);
      draft.showTagsFallback = true;
      break;
    }
    case POPULAR_TAGS_LOAD_FAILURE: {
      draft.showTagsFallback = false;
      break;
    }
    case ALPHABET_TAGS_LOAD_REQUEST: {
      draft.showTagsFallback = false;
      break;
    }
    case ALPHABET_TAGS_LOAD_SUCCESS: {
      draft.hasMoreAlphabetTags = action.data.length === 120;
      draft.alphabetTags.push(...action.data);
      draft.showTagsFallback = true;
      break;
    }
    case ALPHABET_TAGS_LOAD_FAILURE: {
      draft.showTagsFallback = false;
      break;
    }
    default: {
      break;
    }
  }
});

export default PostReducer;
