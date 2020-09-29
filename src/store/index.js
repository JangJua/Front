import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// reducers
import common from "store/reducers/commonReducer";
import postReducer from "store/reducers/postReducer";
import postDetailReducer from "store/reducers/postDetailReducer";
import userReducer from "store/reducers/userReducer";
import register from "store/reducers/registerReducer";
import modal from "store/reducers/modalReducer";
import readingList from "store/reducers/readingListReducer";
import write from "store/reducers/writeReducer";
import save from "store/reducers/saveReducer";
import searchReducer from "store/reducers/searchReducer";
import settingReducer from "store/reducers/settingReducer";

import series from "store/reducers/seriesReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    common,
    postReducer,
    postDetailReducer,
    userReducer,
    register,
    modal,
    readingList,
    write,
    save,
    series,
    searchReducer,
    settingReducer,
  });

export default createRootReducer;
