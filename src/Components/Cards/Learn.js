import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import ServiceData from '../../services/serviceData';
import ErrorMessage from '../Error';
import Loader from '../Loader';
import Card from './Card';
import Cards from './Cards';

class Learn extends React.Component {
  ServiceData = new ServiceData();

  state = {
    cards: [],
    error: null,
    errorMsg: '',
    loading: true,
    currentCard: null,
    finish: false,
  };

  componentDidMount() {
    this.ServiceData.getLearningCards()
      .then(this.onCardsLoaded)
      .catch(this.onError);
  }

  onCardsLoaded = (cards) => {
    this.setState({
      cards,
      error: false,
      errorMsg: '',
      loading: false,
      currentCard: 0,
    });
  }

  onError = (error) => {
    this.setState({
      error: true,
      errorMsg: error.message,
      loading: false,
    });
  }

  updateData = (id, cardState) => {
    const { cards, currentCard } = this.state;

    this.ServiceData.updateCard(id, { status: cardState, lastRepeat: new Date() })
      .then(() => {
        console.log(`${id} updated`);
      })
      .catch((err) => {
        console.log(err);
      });

    if (currentCard === cards.length - 1) {
      return this.setState({
        finish: true,
      });
    }

    const nextCard = currentCard + 1;
    return this.setState({
      currentCard: nextCard,
    });
  }

  render() {
    const { error, errorMsg, loading, cards, currentCard, finish } = this.state;
    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <ErrorMessage message={errorMsg} />;
    }

    if (finish) {
      return <Cards />;
    }

    return (
      <CSSTransitionGroup
        component="div"
        className="card-container"
        transitionName="fade"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={300}
      >
        <Card
          key={currentCard}
          data={cards[currentCard]}
          updateData={this.updateData}
        />
      </CSSTransitionGroup>
    );
  }
}

export default Learn;
