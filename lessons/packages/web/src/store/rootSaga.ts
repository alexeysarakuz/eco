import { all, fork } from 'redux-saga/effects';

import appSagas from 'modules/app/AppSagas';
import authSagas from 'modules/auth/AuthSagas';

function* rootSaga() {
  yield all([fork(appSagas)]);
  yield all([fork(authSagas)]);
}

export default rootSaga;
