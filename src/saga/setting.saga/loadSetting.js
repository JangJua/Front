import { delay, call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";

// action
import {
  LOAD_USER_SETTING_REQUEST,
  LOAD_USER_SETTING_SUCCESS,
  LOAD_USER_SETTING_FAILURE,
} from "store/actions/settingAction";

import dummy1 from "saga/settingDummy.json";

function loadSettingAPI(username) {
  return dummy1;
}

function* loadSetting(action) {
  try {
    const result = yield call(loadSettingAPI, action.data);
    yield put({
      type: LOAD_USER_SETTING_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: LOAD_USER_SETTING_FAILURE,
      data: error,
    });
  }
}

export default function* watchloadSetting() {
  yield takeLatest(LOAD_USER_SETTING_REQUEST, loadSetting);
}
