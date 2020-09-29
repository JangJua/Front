import { delay, call, takeLatest, put } from "redux-saga/effects";
import axios from 'axios';

// action
import {
  LOAD_SEARCH_RESULT_REQUEST,
  LOAD_SEARCH_RESULT_SUCCESS,
  LOAD_SEARCH_RESULT_FAILURE,
} from "store/actions/searchAction";

import dummy1 from "saga/userPostListDummy.json";

function loadSearchAPI(username, searchInput) {
  if (searchInput === "none") return null;
  if (searchInput === "") return "refresh";
  return dummy1;
}

function* loadSearch(action) {
  try {
    const result = yield call(loadSearchAPI, action.username, action.searchInput);
    if (result === null) {
      yield put({
        type: LOAD_SEARCH_RESULT_SUCCESS,
        data: [],
        totalCount: 0,
      });
    } else if (result === "refresh") {
      yield put({
        type: LOAD_SEARCH_RESULT_SUCCESS,
        data: [],
        totalCount: null,
      })
    } else {
      yield put({
        type: LOAD_SEARCH_RESULT_SUCCESS,
        data: result.data,
        totalCount: 40,
      });
    }
  } catch (error) {
    yield put({
      type: LOAD_SEARCH_RESULT_FAILURE,
      data: error
    });
  }
}

export default function* watchloadSearch() {
  yield takeLatest(LOAD_SEARCH_RESULT_REQUEST, loadSearch);
}
