import { FETCH_CARDS_BEGIN, FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILURE } from '../actions/actions';

const initialState = {
  cardsData: {
    allIds: [],
    byIds: {},
  },
  loading: false,
  error: null,
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_BEGIN:
      return {
        cardsData: {},
        loading: true,
        error: null,
      };
    case FETCH_CARDS_SUCCESS:
      return {
        loading: false,
        error: null,
        cardsData: action.payload,
      };
    case FETCH_CARDS_FAILURE:
      return {
        loading: false,
        error: action.payload.error,
        cardsData: {},
      };
    default:
      return state;
  }
};

export default cards;
