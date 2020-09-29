import immer from "immer";

import {
  LOAD_USER_SETTING_REQUEST,
  LOAD_USER_SETTING_SUCCESS,
  LOAD_USER_SETTING_FAILURE,
  SUBMIT_USER_SETTING_REQUEST,
  SUBMIT_USER_SETTING_SUCCESS,
  SUBMIT_USER_SETTING_FAILURE,
  SUBMIT_MAIN_SETTING_REQUEST,
  SUBMIT_MAIN_SETTING_SUCCESS,
  SUBMIT_MAIN_SETTING_FAILURE,
  SUBMIT_TITLE_SETTING_REQUEST,
  SUBMIT_TITLE_SETTING_SUCCESS,
  SUBMIT_TITLE_SETTING_FAILURE,
  SUBMIT_SOCIAL_SETTING_REQUEST,
  SUBMIT_SOCIAL_SETTING_SUCCESS,
  SUBMIT_SOCIAL_SETTING_FAILURE,
  SUBMIT_NOTIFY_SETTING_REQUEST,
  SUBMIT_NOTIFY_SETTING_SUCCESS,
  SUBMIT_NOTIFY_SETTING_FAILURE,
} from "../actions/settingAction";

const initialState = {
  username: "initialUser",
  shortBio: "initialMessage",
  velogTitle: "initial.log",
  socialInfo: {
    email: undefined,
    github: undefined,
    twitter: undefined,
    facebook: undefined,
    homePage: undefined,
  },
  userEmail: "initial@example.com",
  commentNotification: true,
  updateNotification: false,
};

const SearchReducer = (state = initialState, action) =>
  immer(state, (draft) => {
    switch (action.type) {
      case LOAD_USER_SETTING_REQUEST: {
        break;
      }
      case LOAD_USER_SETTING_SUCCESS: {
        draft.username = action.data.username;
        draft.shortBio = action.data.shortBio;
        draft.velogTitle = action.data.velogTitle;
        draft.socialInfo = action.data.socialInfo;
        draft.userEmail = action.data.userEmail;
        draft.toggle = action.data.toggle;
        break;
      }
      case LOAD_USER_SETTING_FAILURE: {
        console.error(action.data);
        break;
      }
      case SUBMIT_USER_SETTING_REQUEST: {
        break;
      }
      case SUBMIT_USER_SETTING_SUCCESS: {
        draft.username = action.data.username;
        draft.shortBio = action.data.shortBio;
        draft.velogTitle = action.data.velogTitle;
        draft.socialInfo = action.data.socialInfo;
        draft.userEmail = action.data.userEmail;
        draft.toggle = action.data.toggle;
        break;
      }
      case SUBMIT_USER_SETTING_FAILURE: {
        break;
      }
      case SUBMIT_MAIN_SETTING_REQUEST: {
        break;
      }
      case SUBMIT_MAIN_SETTING_SUCCESS: {
        draft.username = action.data.username;
        draft.shortBio = action.data.shortBio;
        break;
      }
      case SUBMIT_MAIN_SETTING_FAILURE: {
        break;
      }
      case SUBMIT_TITLE_SETTING_REQUEST: {
        break;
      }
      case SUBMIT_TITLE_SETTING_SUCCESS: {
        draft.velogTitle = action.data.velogTitle;
        break;
      }
      case SUBMIT_TITLE_SETTING_FAILURE: {
        break;
      }
      case SUBMIT_SOCIAL_SETTING_REQUEST: {
        break;
      }
      case SUBMIT_SOCIAL_SETTING_SUCCESS: {
        draft.socialInfo = action.data.socialInfo;
        break;
      }
      case SUBMIT_SOCIAL_SETTING_FAILURE: {
        break;
      }
      case SUBMIT_NOTIFY_SETTING_REQUEST: {
        break;
      }
      case SUBMIT_NOTIFY_SETTING_SUCCESS: {
        draft.commentNotification = action.data.commentNotification;
        draft.updateNotification = action.data.updateNotification;
        break;
      }
      case SUBMIT_NOTIFY_SETTING_FAILURE: {
        break;
      }
      default:
        break;
    }
  });

export default SearchReducer;
