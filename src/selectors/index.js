/* eslint-disable implicit-arrow-linebreak */
export const getCardsData = (store) => store.cards;

export const getCardsIdList = (store) =>
  (getCardsData(store) ? getCardsData(store).cardsData.cards.allIds : []);

export const getCardById = (store, id) =>
  (getCardsData(store) ? getCardsData(store).cardsData.cards.byIds[id] : {});

export const getCards = (store) =>
  (getCardsIdList(store).map((id) => getCardById(store, id)));

export const getRepeatCards = (store) => {
  const allCards = getCards(store);
  return allCards.filter((card) => card.status === 'repeat');
};
