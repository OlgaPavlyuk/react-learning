import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initialState = {
  theme: {
    colorTheme: 'purple',
  },
  cards: {
    cardsData: {
      allIds: [],
      byIds: {},
    },
    loading: false,
    error: null,
  },
};

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
);
