import React from 'react';
import { connect } from 'react-redux';
import CardsTable from './CardsTable';
import Loader from '../Loader';
import { getCards } from '../../store/selectors/index';
import fetchCards from '../../store/actions/fetchCards';

const mapStateToProps = (store) => {
  const props = {
    cards: getCards(store),
    loading: store.cards.loading,
    error: store.cards.error,
  };
  return props;
};

const mapDispatchToProps = (dispatch) => ({
  fetchCardsData: () => dispatch(fetchCards()),
});

class Cards extends React.Component {
  componentDidMount() {
    this.props.fetchCardsData();
  }

  render() {
    const { error, loading, cards } = this.props;

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <CardsTable list={cards} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
