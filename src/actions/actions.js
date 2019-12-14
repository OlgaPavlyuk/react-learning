export const changeThemeAction = (newTheme) => ({
  type: 'CHANGE_THEME',
  payload: newTheme,
});

export const FETCH_CARDS_BEGIN = 'FETCH_CARDS_BEGIN';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';

export const fetchCardsBegin = () => ({
  type: FETCH_CARDS_BEGIN,
  payload: {},
});

export const fetchCardsSuccess = (cards) => ({
  type: FETCH_CARDS_SUCCESS,
  payload: { cards },
});

export const fetchCardsFailure = (error) => ({
  type: FETCH_CARDS_FAILURE,
  payload: { error },
});

export const addCardAction = (card) => ({
  type: 'ADD_CARD',
  payload: card,
});

export const toggleCardStatus = (id) => ({
  type: 'TOGGLE_STATUS',
  payload: { id },
});
