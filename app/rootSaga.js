import { fork, all } from 'redux-saga/effects';
import HelloWorldSagas from './scenes/HelloWorld/sagas';

const sagas = [
  ...HelloWorldSagas
]

export default function* RootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
