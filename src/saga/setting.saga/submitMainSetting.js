import { delay, call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";

// action
import {
  SUBMIT_MAIN_SETTING_REQUEST,
  SUBMIT_MAIN_SETTING_SUCCESS,
  SUBMIT_MAIN_SETTING_FAILURE,
} from "store/actions/settingAction";

function submitMainSettingAPI(data) {
  //axios.post(...);
  return data;
}

function* submitMainSetting(action) {
  try {
    const result = yield call(submitMainSettingAPI, action.data);
    console.log(result);
    yield put({
      type: SUBMIT_MAIN_SETTING_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: SUBMIT_MAIN_SETTING_FAILURE,
      data: error,
    });
  }
}

export default function* watchsubmitMainSetting() {
  yield takeLatest(SUBMIT_MAIN_SETTING_REQUEST, submitMainSetting);
}
