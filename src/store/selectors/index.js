/* eslint-disable implicit-arrow-linebreak */
import { shuffle } from 'lodash';
import { MAX_CARDS_TO_LEARN } from '../../constatns';

export const getCardsData = (store) => store.cards;

export const getCardsIdList = (store) =>
  (getCardsData(store) ? getCardsData(store).cardsData.allIds : []);

export const getCardById = (store, id) =>
  (getCardsData(store) ? getCardsData(store).cardsData.byIds[id] : {});

export const getCards = (store) =>
  (getCardsIdList(store).map((id) => getCardById(store, id)));

export const getRepeatCards = (store) => {
  /* todo:
    check if all cards learnd,
    get by date: if card wasn't repeated more than N days
    make array of cards never learned (status = 'repeat')
      and cards already were shown (status = 'known')
    make settings: how many days for repeat card again, how many cards to show,
  */
  const allCards = getCards(store);
  const cardsToLearn = shuffle(allCards.filter((card) => card.status === 'repeat'));
  return cardsToLearn.slice(0, MAX_CARDS_TO_LEARN);
};
