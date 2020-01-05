import { FETCH_CARDS_BEGIN, FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILURE } from '../actions/cardsActions';

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
        ...state,
        loading: true,
      };
    case FETCH_CARDS_SUCCESS:
      return {
        loading: false,
        error: null,
        cardsData: action.payload,
      };
    case FETCH_CARDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case 'TOGGLE_CARD': {
      const { id, status } = action.payload;
      return {
        ...state,
        cardsData: {
          ...state.cardsData.allIds,
          byIds: {
            ...state.cardsData.byIds,
            [id]: {
              ...state.cardsData.byIds[id],
              status: status === 'known' ? 'repeat' : 'known',
            },
          },
        },
      };
    }
    case 'UPDATE_CARDS':
      return {
        ...state,
        cardsData: {
          allIds: [...state.cardsData.allIds],
          byIds: {
            ...action.payload,
          },
        },
      };
    case 'ADD_CARD':
      console.log(action.payload);
      return {
        ...state,
        cardsData: {
          allIds: [
            ...state.cardsData.allIds,
            action.payload.id,
          ],
          byIds: {
            ...state.cardsData.byIds,
            [action.payload.id]: {
              ...action.payload,
              status: 'repeat',
            },
          },
        },
      };
    default:
      return state;
  }
};

export default cards;
