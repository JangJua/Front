import { delay, call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";

// action
import {
  SUBMIT_SOCIAL_SETTING_REQUEST,
  SUBMIT_SOCIAL_SETTING_SUCCESS,
  SUBMIT_SOCIAL_SETTING_FAILURE,
} from "store/actions/settingAction";

function submitSocialSettingAPI(data) {
  //axios.post(...);
  return data;
}

function* submitSocialSetting(action) {
  try {
    const result = yield call(submitSocialSettingAPI, action.data);
    console.log(result);
    yield put({
      type: SUBMIT_SOCIAL_SETTING_SUCCESS,
      data: result,
    });
  } catch (error) {
    yield put({
      type: SUBMIT_SOCIAL_SETTING_FAILURE,
      data: error,
    });
  }
}

export default function* watchsubmitSocialSetting() {
  yield takeLatest(SUBMIT_SOCIAL_SETTING_REQUEST, submitSocialSetting);
}
