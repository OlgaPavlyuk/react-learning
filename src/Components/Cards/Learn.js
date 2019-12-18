import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Card from './Card';
import CardsTable from './CardsTable';

class Learn extends React.Component {
  constructor(props) {
    super(props);
    const { cards } = this.props;
    this.state = {
      cards,
      isFinish: false,
      currentCard: 0,
    };
  }

  cardBtnClickHandler = (id, status) => {
    const { currentCard, cards } = this.state;
    const nextCard = currentCard + 1;
    let finish = false;

    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, status };
      }
      return card;
    });

    if (nextCard >= cards.length) {
      finish = true;
      this.props.onFinishCards(updatedCards);
    }

    return this.setState({
      ...this.state,
      cards: [
        ...updatedCards,
      ],
      currentCard: nextCard,
      isFinish: finish,
    });
  };

  render() {
    const { cards, currentCard, isFinish } = this.state;

    if (cards.length < 1) {
      return <div>All cards are learned</div>;
    }

    if (isFinish) {
      return (
        <>
          <h2 className="h2 title--centred">Good jod! You've learned the cards: </h2>
          <CardsTable list={cards} />
        </>
      );
    }

    return (
      <div className='card-container'>
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

export default Learn;
