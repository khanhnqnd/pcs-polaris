import rootReducer from './reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares: any[] = [];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares.concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export type AppState = ReturnType<typeof store.getState>;

export default store;
