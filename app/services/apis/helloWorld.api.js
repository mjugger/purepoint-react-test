import fetch from 'isomorphic-fetch';
import { SERVER_URL } from '../../global/global.constants';
const baseURL = `${SERVER_URL}/api`;

export const fetchHelloWorld = () => {
  return fetch(`${baseURL}/helloworld`)
    .then(response => response)
    .catch(error => error)
};
