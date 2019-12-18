import { fetchCardsBegin, fetchCardsSuccess, fetchCardsFailure } from './cardsActions';

const apiBase = process.env.NODE_ENV === 'production' ? '.' : 'http://localhost:3000';

const fetchCards = () => (dispatch) => {
  dispatch(fetchCardsBegin());
  fetch(`${apiBase}/db.json`)
    .then(handleErrors)
    .then((res) => res.json())
    .then((json) => {
      dispatch(fetchCardsSuccess(json.cards));
      return json.cards;
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
