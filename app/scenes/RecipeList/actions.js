import {
  FETCH_RECIPE_CONTAINS_NAME_REQUESTED,
  FETCH_RECIPE_CONTAINS_NAME_SUCCEEDED,
  FETCH_RECIPE_CONTAINS_NAME_FAILED
} from './constants';

export const recipeContainsNameRequested = text => (
  {
    type: FETCH_RECIPE_CONTAINS_NAME_REQUESTED,
    text
  }
);

export const recipeContainsNameSucceeded = recipes => (
  {
    type: FETCH_RECIPE_CONTAINS_NAME_SUCCEEDED,
    recipes
  }
);

export const recipeContainsNameFailed = error => (
  {
    type: FETCH_RECIPE_CONTAINS_NAME_FAILED,
    error
  }
);
