import { all, fork } from "redux-saga/effects";

// saga
import loadSetting from "./loadSetting";
import submitSetting from "./submitSetting";
import submitMainSetting from "./submitMainSetting";
import submitTitleSetting from "./submitTitleSetting";
import submitSocialSetting from "./submitSocialSetting";
import submitNotifySetting from "./submitNotifySetting";

export default function* () {
  yield all([
    fork(loadSetting),
    fork(submitSetting),
    fork(submitMainSetting),
    fork(submitTitleSetting),
    fork(submitSocialSetting),
    fork(submitNotifySetting),
  ]);
}
