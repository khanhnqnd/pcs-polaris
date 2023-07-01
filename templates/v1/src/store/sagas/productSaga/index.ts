import { put, takeLatest, delay } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { productAction } from '../../reducers/productReducer';
import { AxiosResponse } from 'axios';
import { apiClient } from '../../../utils/api';
import { products } from '../../../data/products.ts';

function* fetchProducts() {
  try {
    yield delay(500);
    yield put(
      productAction.fetchProductsSucceed({
        products: products,
      }),
    );
  } catch (e) {
    yield put(productAction.fetchProductsFailed());
  }
}

function* productSaga() {
  yield takeLatest(productAction.fetchProducts.type, fetchProducts);
}

export default productSaga;
