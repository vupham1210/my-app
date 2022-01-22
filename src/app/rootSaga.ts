import { all } from 'redux-saga/effects';
import counterSaga from '../features/counterSaga';
function* helloSaga(){
    console.log('hello Saga');
}

export default function* rootSaga(){
    console.log('root Saga');
    yield all([
        helloSaga(),
        counterSaga(),
    ]);
}
