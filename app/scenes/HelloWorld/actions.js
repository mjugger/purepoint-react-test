import {
  FETCH_HELLO_WORLD_REQUESTED,
  FETCH_HELLO_WORLD_SUCCEEDED,
  FETCH_HELLO_WORLD_FAILED
} from './constants';

export const helloWorldRequested = () => (
  {
    type: FETCH_HELLO_WORLD_REQUESTED
  }
);

export const helloWorldSucceeded = helloWorld => (
  {
    type: FETCH_HELLO_WORLD_SUCCEEDED,
    helloWorld
  }
);

export const helloWorldFailed = error => (
  {
    type: FETCH_HELLO_WORLD_FAILED,
    error
  }
);
