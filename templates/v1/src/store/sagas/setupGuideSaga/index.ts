import { put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { setupGuideAction } from '../../reducers/setupGuideReducer';
import { AxiosResponse } from 'axios';
import { apiClient } from '../../../utils/api';

function* fetchSetupGuides({ payload }: PayloadAction) {
  try {
    const response: AxiosResponse = yield apiClient.get('/setup-guide/all.json');
    const responseData = response.data;
    if (responseData.status) {
      const mainData = responseData.data;
      const setup_codes: string[] = [];
      for (let i = 0; i < mainData.length; i++) {
        setup_codes.push(mainData[i].setup_code);
      }
      yield put(
        setupGuideAction.fetchSetupGuidesSucceed({
          setup_codes: setup_codes,
        }),
      );
    } else {
      yield put(setupGuideAction.fetchSetupGuidesFailed());
    }
  } catch (e) {
    yield put(setupGuideAction.fetchSetupGuidesFailed());
  }
}

function* toggleSetupGuide({ payload }: PayloadAction<any>) {
  try {
    const setupCode = payload.setup_code;
    const response: AxiosResponse = yield apiClient.post('/setup-guide/toggle.json', {
      setup_code: setupCode,
    });
    const responseData = response.data;
    if (responseData.status) {
      const mainData = responseData.data;
      const setup_codes: string[] = [];
      for (let i = 0; i < mainData.length; i++) {
        setup_codes.push(mainData[i].setup_code);
      }
      yield put(
        setupGuideAction.toggleSetupGuideSucceed({
          setup_codes: setup_codes,
        }),
      );
    } else {
      yield put(setupGuideAction.toggleSetupGuideFailed());
    }
  } catch (e) {
    yield put(setupGuideAction.toggleSetupGuideFailed());
  }
}

function* setupGuideSaga() {
  yield takeLatest(setupGuideAction.fetchSetupGuides.type, fetchSetupGuides);
  yield takeLatest(setupGuideAction.toggleSetupGuide.type, toggleSetupGuide);
}

export default setupGuideSaga;
