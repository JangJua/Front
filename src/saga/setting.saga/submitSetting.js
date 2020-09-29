import { delay, call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";

// action
import {
  SUBMIT_USER_SETTING_REQUEST,
  SUBMIT_USER_SETTING_SUCCESS,
  SUBMIT_USER_SETTING_FAILURE,
} from "store/actions/settingAction";

function submitSettingAPI(data) {
  //axios.post(...);
  return data;
}

function* submitSetting(action) {
  try {
    const result = yield call(submitSettingAPI, action.data);
    console.log(result);
    yield put({
      type: SUBMIT_USER_SETTING_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: SUBMIT_USER_SETTING_FAILURE,
      data: error,
    });
  }
}

export default function* watchsubmitSetting() {
  yield takeLatest(SUBMIT_USER_SETTING_REQUEST, submitSetting);
}
