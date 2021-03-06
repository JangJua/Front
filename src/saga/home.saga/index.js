import { all, fork } from "redux-saga/effects";

// saga
import loadNotices from "./loadNotices";
import loadPopuplarTags from "./loadPopuplarTags";
import loadRecentPosts from "./loadRecentPosts";
import loadTrendingPosts from "./loadTrendingPosts";
import loadAlphabetTags from "./loadAlphabetTags";

export default function* () {
  yield all([
    fork(loadNotices),
    fork(loadPopuplarTags),
    fork(loadRecentPosts),
    fork(loadTrendingPosts),
    fork(loadAlphabetTags),
  ]);
}
