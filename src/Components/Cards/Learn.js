import React from 'react';
import ServiceData from '../../services/serviceData';
import ErrorMessage from '../Error';
import Loader from '../Loader';
import Card from '../Cards/Card';

class Learn extends React.Component {
  ServiceData = new ServiceData();

  state = {
    cards: [],
    error: null,
    errorMsg: '',
    loading: true,
    currentCard: null,
    finish: false
  };

  componentDidMount() {
    this.ServiceData.getLearningCards()
    .then(this.onCardsLoaded)
    .catch(this.onError)
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

  updateData = (id, card_state) => {
    const { cards, currentCard } = this.state;
    let nextCard;
    console.log(cards.length);
    if (currentCard === cards.length - 1 ) {
      // this.ServiceData.updateCards(cards)
      // .then(() => {
      //   console.log('good');
      //   return this.setState({
      //     finish: true
      //   });
      // })
      // .catch((err) => {
      //   console.log(err);
      // })
      console.log('good');
      return this.setState({
        finish: true
      });
    } else {
      this.ServiceData.updateCard(id, {shown: card_state, last_repeat: new Date()})
      .then(() => {
        console.log(`${id} updated`);
      })
      .catch((err) => {
        console.log(err);
      });

      nextCard = currentCard + 1;
      //cards[currentCard].shown = card_state;
      this.setState({
        currentCard: nextCard
      });
    }   
  }

  render() {
    const { error, errorMsg, loading, cards, currentCard, finish } = this.state;
    if (loading) {
      return <Loader />
    }

    if (error) {
      return <ErrorMessage message={errorMsg}/>
    }

    if (finish) {
      return <div>Good Job</div>
    }

    return (
      <Card key={currentCard} data={cards[currentCard]} updateData={this.updateData}/>
    );
  }
}

export default Learn;
