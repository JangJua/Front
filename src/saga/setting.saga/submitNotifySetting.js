import { delay, call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";

// action
import {
  SUBMIT_NOTIFY_SETTING_REQUEST,
  SUBMIT_NOTIFY_SETTING_SUCCESS,
  SUBMIT_NOTIFY_SETTING_FAILURE,
} from "store/actions/settingAction";

function submitNotifySettingAPI(data) {
  //axios.post(...);
  return data;
}

function* submitNotifySetting(action) {
  try {
    const result = yield call(submitNotifySettingAPI, action.data);
    console.log(result);
    yield put({
      type: SUBMIT_NOTIFY_SETTING_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: SUBMIT_NOTIFY_SETTING_FAILURE,
      data: error,
    });
  }
}

export default function* watchsubmitNotifySetting() {
  yield takeLatest(SUBMIT_NOTIFY_SETTING_REQUEST, submitNotifySetting);
}
