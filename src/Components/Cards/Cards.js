import React from 'react';
import { connect } from 'react-redux';
import CardsTable from './CardsTable';
import { getCards } from '../../selectors/index';

const mapStateToProps = (state) => ({
  cards: getCards(state),
  loading: state.cards.loading,
  error: state.cards.error,
});

class Cards extends React.Component {
  render() {
    const { error, loading, cards } = this.props;

    if (loading) {
      return <div>Loading</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <CardsTable list={cards} />
    );
  }
}

export default connect(mapStateToProps)(Cards);
