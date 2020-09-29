import { delay, call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";

// action
import {
  SUBMIT_TITLE_SETTING_REQUEST,
  SUBMIT_TITLE_SETTING_SUCCESS,
  SUBMIT_TITLE_SETTING_FAILURE,
} from "store/actions/settingAction";

function submitTitleSettingAPI(data) {
  //axios.post(...);
  return data;
}

function* submitTitleSetting(action) {
  try {
    const result = yield call(submitTitleSettingAPI, action.data);
    console.log(result);
    yield put({
      type: SUBMIT_TITLE_SETTING_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: SUBMIT_TITLE_SETTING_FAILURE,
      data: error,
    });
  }
}

export default function* watchsubmitTitleSetting() {
  yield takeLatest(SUBMIT_TITLE_SETTING_REQUEST, submitTitleSetting);
}
