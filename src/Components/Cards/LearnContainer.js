import React from 'react';
import { connect } from 'react-redux';
import Learn from './Learn';
import Loader from '../Loader';
import { getRepeatCards } from '../../store/selectors/index';
import fetchCards from '../../store/actions/fetchCards';
import { updateCards } from '../../store/actions/cardsActions';

const mapStateToProps = (store) => {
  const props = {
    cardsData: store.cards.cardsData,
    cards: getRepeatCards(store),
    loading: store.cards.loading,
    error: store.cards.error,
  };
  return props;
};

const mapDispatchToProps = (dispatch) => ({
  fetchCardsData: () => dispatch(fetchCards()),
  updateCards: (newData) => dispatch(updateCards(newData)),
});

class LearnContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCardsData();
  }

  updateCardsStatus = (updatedCards) => {
    const { byIds } = this.props.cardsData;
    const newCardsByIds = { ...byIds };
    updatedCards.forEach((card) => {
      newCardsByIds[card.id] = card;
    });
    this.props.updateCards(newCardsByIds);
  }

  render() {
    const { error, loading, cards } = this.props;

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return <Learn cards={cards} onFinishCards={this.updateCardsStatus} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnContainer);
