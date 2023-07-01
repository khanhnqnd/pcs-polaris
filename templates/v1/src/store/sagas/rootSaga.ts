import { all } from 'redux-saga/effects';
import setupGuideSaga from './setupGuideSaga';
import searchSaga from './searchSaga/index';
import productSaga from './productSaga';

function* rootSaga() {
  yield all([setupGuideSaga(), searchSaga(), productSaga()]);
}

export default rootSaga;
