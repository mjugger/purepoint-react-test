import { combineReducers } from 'redux';
//import HomeReducer from './scenes/home/reducer';
import HelloWorldReducer from './scenes/HelloWorld/reducer';


const RootReducer = combineReducers({
  HelloWorldReducer
});

export default RootReducer;
