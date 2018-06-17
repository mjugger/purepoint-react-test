import { put, takeLatest, call, select } from 'redux-saga/effects';
import {
  fetchHelloWorld
} from '../../services/apis/helloWorld.api';
//import { getToken } from '../../services/sagaSelectors';
import {
  FETCH_HELLO_WORLD_REQUESTED,
  FETCH_HELLO_WORLD_SUCCEEDED,
  FETCH_HELLO_WORLD_FAILED
} from './constants';
import {
  helloWorldRequested,
  helloWorldSucceeded,
  helloWorldFailed
} from './actions';
// import {
//   showLoadingModal,
//   hideLoadingModal
// } from '../../global/components/loadingModal/actions';

function* helloWorldSaga(action) {
  //yield put(showLoadingModal());
  try {
    //const token = yield select(getToken);
    const helloWorld = yield call(fetchHelloWorld);
    console.log(helloWorld);
    if (helloWorld.ok) {
        const responseData = yield call(() => helloWorld.json());
        yield put( helloWorldSucceeded({...responseData, error: null}) );
    } else {
      throw Error(`HelloWorld error: ${helloWorld}`);
    }
  } catch(error) {
    yield put( helloWorldFailed({error}) );
  }
  //yield put(hideLoadingModal());
}

function* watchHelloWorldSaga() {
  yield takeLatest(FETCH_HELLO_WORLD_REQUESTED, helloWorldSaga);
}

const HelloWorldSagas = [
  watchHelloWorldSaga
];
export default HelloWorldSagas;
