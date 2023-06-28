import { put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { searchAction } from '../../reducers/searchReducer';
import { AxiosResponse } from 'axios';
import { apiClient } from '../../../utils/api';

function* searchEmails({ payload }: PayloadAction<any>) {
  try {
    const keyword = payload.keyword ?? '';
    const url = `/subscriber/all.json?keyword=${keyword}&page=1&limit=10`;
    const response: AxiosResponse = yield apiClient.get(url);
    const responseData = response.data;
    if (responseData.status) {
      const mainData = responseData.data;
      yield put(
        searchAction.searchEmailsSucceed({
          emails: mainData.rows,
        }),
      );
    } else {
      yield put(searchAction.searchEmailsFailed());
    }
  } catch (e) {
    yield put(searchAction.searchEmailsFailed());
  }
}

function* searchSaga() {
  yield takeLatest(searchAction.searchEmails.type, searchEmails);
}

export default searchSaga;
