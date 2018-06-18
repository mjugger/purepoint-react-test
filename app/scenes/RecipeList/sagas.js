import { put, takeLatest, call, select } from 'redux-saga/effects';
import {
  fetchRecipeContainsName
} from '../../services/apis/recipe.api';
//import { getToken } from '../../services/sagaSelectors';
import {
  FETCH_RECIPE_CONTAINS_NAME_REQUESTED,
  FETCH_RECIPE_CONTAINS_NAME_SUCCEEDED,
  FETCH_RECIPE_CONTAINS_NAME_FAILED
} from './constants';
import {
  recipeContainsNameRequested,
  recipeContainsNameSucceeded,
  recipeContainsNameFailed
} from './actions';
// import {
//   showLoadingModal,
//   hideLoadingModal
// } from '../../global/components/loadingModal/actions';

function* recipeContainsNameSaga(action) {
  //yield put(showLoadingModal());
  try {
    //const token = yield select(getToken);
    const recipes = yield call(fetchRecipeContainsName, action.text);
    if (recipes.ok) {
        const responseData = yield call(() => recipes.json());
        yield put( recipeContainsNameSucceeded({...responseData, error: null}) );
    } else {
      throw Error(`recipeContainsNameSaga error: ${helloWorld}`);
    }
  } catch(error) {
    yield put( recipeContainsNameFailed({error}) );
  }
  //yield put(hideLoadingModal());
}

function* watchRecipeContainsNameSaga() {
  console.log('watchRecipeContainsNameSaga');
  yield takeLatest(FETCH_RECIPE_CONTAINS_NAME_REQUESTED, recipeContainsNameSaga);
}

const RecipeListSagas = [
  watchRecipeContainsNameSaga
];
export default RecipeListSagas;
