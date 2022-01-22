import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import categoryReducer from '../api/Category';
import templatesReducer from '../api/Layout';
import singleReducer from '../api/Post';
import ModalReducer from '../api/ModalSearch';
//import SagaMiddleware from 'redux-saga';
//import rootSaga from './rootSaga';

//const sagaMiddleware = SagaMiddleware();

const reducer = {
  counter: counterReducer,
  category: categoryReducer,
  templates: templatesReducer,
  posts: singleReducer,
  modal: ModalReducer,
};
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({serializableCheck: false})// .concat(sagaMiddleware),
});

//sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
