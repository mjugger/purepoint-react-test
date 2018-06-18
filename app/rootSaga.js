import { fork, all } from 'redux-saga/effects';
import RecipeListSagas from './scenes/RecipeList/sagas';

const sagas = [
  ...RecipeListSagas
]

export default function* RootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
