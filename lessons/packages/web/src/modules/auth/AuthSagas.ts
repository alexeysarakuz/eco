import { push } from 'connected-react-router';
import { all, put, takeEvery } from 'redux-saga/effects';

import { REGISTER, LOGIN, LOGOUT } from './AuthActions';

function* registerSuccessSaga() {
  yield put(push('/'));
}

function* loginSuccessSaga() {
  yield put(push('/'));
}

function* logoutSaga(): any {
  yield put(push('/login'));
}

function* authSagas() {
  yield all([
    yield takeEvery(`${REGISTER}_SUCCESS`, registerSuccessSaga),
    yield takeEvery(`${LOGIN}_SUCCESS`, loginSuccessSaga),
    yield takeEvery(LOGOUT, logoutSaga),
  ]);
}

export default authSagas;
