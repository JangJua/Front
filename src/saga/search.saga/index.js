import { all, fork } from "redux-saga/effects";

// saga
import search from "./search";

export default function* () {
  yield all([fork(search)]);
}
