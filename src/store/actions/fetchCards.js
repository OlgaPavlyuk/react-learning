import { fetchCardsBegin, fetchCardsSuccess, fetchCardsFailure } from './cardsActions';

const apiBase = 'https://my-json-server.typicode.com/OlgaPavlyuk/react-learning';

const fetchCards = () => (dispatch) => {
  dispatch(fetchCardsBegin());
  fetch(`${apiBase}/cards`)
    .then(handleErrors)
    .then((res) => res.json())
    .then((json) => {
      dispatch(fetchCardsSuccess(json));
      return json;
    })
    .catch((error) => dispatch(fetchCardsFailure(error)));
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export default fetchCards;
