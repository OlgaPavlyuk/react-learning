import { fetchCardsBegin, fetchCardsSuccess, fetchCardsFailure } from '../actions/actions';

const apiBase = process.env.NODE_ENV === 'production' ? '.' : 'http://localhost:3000';

export default function fetchCards() {
  return (dispatch) => {
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
}

function handleErrors(response) {
  if (!response.ok) {
    console.log(response.statusText);
    throw Error(response.statusText);
  }
  return response;
}
