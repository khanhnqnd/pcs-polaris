import { all } from 'redux-saga/effects';
import setupGuideSaga from './setupGuideSaga';
import searchSaga from './searchSaga/index';

function* rootSaga() {
  yield all([setupGuideSaga(), searchSaga()]);
}

export default rootSaga;
