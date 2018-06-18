import { combineReducers } from 'redux';
//import HomeReducer from './scenes/home/reducer';
import RecipeListReducer from './scenes/RecipeList/reducer';


const RootReducer = combineReducers({
  RecipeListReducer
});

export default RootReducer;
