
import {
  FETCH_HELLO_WORLD_REQUESTED,
  FETCH_HELLO_WORLD_SUCCEEDED,
  FETCH_HELLO_WORLD_FAILED
} from './constants';

const initialState = {
  helloWorld: 'Fetching hello world message...',
  error: null
};

const HelloWorldReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_HELLO_WORLD_REQUESTED:
      return {...state};

    case FETCH_HELLO_WORLD_SUCCEEDED:
      return {...state, ...action.helloWorld};

    case FETCH_HELLO_WORLD_FAILED:
      return {...state, error: action.error};

      default:
        return state;
  }
}

export default HelloWorldReducer;
