import { all, call } from "redux-saga/effects";
import axios from "axios";

import common from "./common.saga";
import home from "./home.saga";
import postDetail from "./postDetail.saga";
import register from "./register.saga";
import user from "./user.saga";
import modal from "./modal.saga";
import readingList from "./readingList.saga";
import write from "./write.saga";
import save from "./save.saga";
import search from "./search.saga";
import setting from "./setting.saga";
import series from "./series.saga";

axios.defaults.baseURL = "localhost:3000/velog.io";
axios.defaults.withCredentials = true;

export default function* () {
  yield all([
    call(common),
    call(home),
    call(postDetail),
    call(register),
    call(user),
    call(modal),
    call(readingList),
    call(write),
    call(save),
    call(search),
    call(setting),
    call(series),
  ]);
}
