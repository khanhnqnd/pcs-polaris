import { delay, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { searchAction } from '../../reducers/searchReducer';
import { customers } from '../../../data/search.ts';

function* searchCustomers({ payload }: PayloadAction<any>) {
  try {
    console.log(payload);
    yield delay(500);
    yield put(
      searchAction.searchCustomersSucceed({
        customers: customers,
      }),
    );
  } catch (e) {
    yield put(searchAction.searchCustomersFailed());
  }
}

function* searchSaga() {
  yield takeLatest(searchAction.searchCustomers.type, searchCustomers);
}

export default searchSaga;
