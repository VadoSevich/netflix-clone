import { takeEvery, all } from 'redux-saga/effects';

import {
  authUserSaga,
  authLogoutSaga,
  resetPasswordSaga
} from './auth';

import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_LOGOUT, authLogoutSaga),
    takeEvery(actionTypes.RESET_PASSWORD, resetPasswordSaga)
  ])
}
