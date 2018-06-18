
import {
  FETCH_RECIPE_CONTAINS_NAME_REQUESTED,
  FETCH_RECIPE_CONTAINS_NAME_SUCCEEDED,
  FETCH_RECIPE_CONTAINS_NAME_FAILED
} from './constants';

const initialState = {
  recipes: [],
  error: null
};

const RecipeListReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_RECIPE_CONTAINS_NAME_REQUESTED:
      return {...state};

    case FETCH_RECIPE_CONTAINS_NAME_SUCCEEDED:
      return {...state, recipes: action.recipes.results, error: action.error};

    case FETCH_RECIPE_CONTAINS_NAME_FAILED:
      return {...state, error: action.error};

      default:
        return state;
  }
}

export default RecipeListReducer;
