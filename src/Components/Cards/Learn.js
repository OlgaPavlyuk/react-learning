import React from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import Card from './Card';
import CardsTable from './CardsTable';
import { getRepeatCards } from '../../selectors/index';

const mapStateToProps = (state) => {
  console.log(state);
  const props = {
    cards: getRepeatCards(state),
    error: state.cards.cardsData.error,
  };
  return props;
};

class Learn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.cards,
      finish: false,
      currentCard: 0,
    };
  }

  cardBtnClickHandler = (id, status) => {
    const { currentCard, cards } = this.state;

    if (currentCard === cards.length - 1) {
      return this.setState({ finish: true });
    }

    const nextCard = currentCard + 1;
    return this.setState({ currentCard: nextCard });
  };

  render() {
    const { cards, currentCard, finish } = this.state;

    if (cards.length < 1) {
      return <div>All cards are learned</div>;
    }

    if (finish) {
      return (
        <>
          <h2 className="h2 title--centred">Good jod! Your cards: </h2>
          <CardsTable list={cards} />
        </>
      );
    }

    return (
      <div className='card-container'>
        <div>Cards to learn {cards.length}</div>
        <CSSTransitionGroup
          component="div"
          className=""
          transitionName="fade"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={300}
        >
          <Card
            key={currentCard}
            data={cards[currentCard]}
            clickHandler={this.cardBtnClickHandler}
          />
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Learn);
