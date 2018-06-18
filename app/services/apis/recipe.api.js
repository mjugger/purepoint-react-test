import fetch from 'isomorphic-fetch';
import { SERVER_URL } from '../../global/global.constants';
const baseURL = `${SERVER_URL}/api`;
export const fetchRecipeContainsName = text => {
  console.log('text: ', text);
  return fetch(`${baseURL}/recipecontains`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({text})
  })
    .then(response => response)
    .catch(error => error)
};
