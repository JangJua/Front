import { call, delay, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import alphabeticalTags from "saga/alphabeticalTags";

// actions
import {
  ALPHABET_TAGS_LOAD_REQUEST,
  ALPHABET_TAGS_LOAD_SUCCESS,
  ALPHABET_TAGS_LOAD_FAILURE,
} from "store/actions/postAction";

function loadAlphabetTagsApi() {
  return alphabeticalTags;
  // return axios.get();
}

function* loadAlphabetTags(action) {
  try {
    yield delay(1000);
    const result = yield call(loadAlphabetTagsApi);
    yield put({
      type: ALPHABET_TAGS_LOAD_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: ALPHABET_TAGS_LOAD_FAILURE,
      data: error,
    });
  }
}

export default function* watchLoadAlphabetTags() {
  yield takeLatest(ALPHABET_TAGS_LOAD_REQUEST, loadAlphabetTags);
}
