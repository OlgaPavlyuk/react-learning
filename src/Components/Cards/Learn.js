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
    currentCard: null
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
      currentCard: 2,
    });
  }

  onError = (error) => {
    this.setState({
      error: true,
      errorMsg: error.message,
      loading: false,
    });
  }

  render() {
    const { error, errorMsg, loading, cards, currentCard } = this.state;
    if (loading) {
      return <Loader />
    }

    if (error) {
      return <ErrorMessage message={errorMsg}/>
    }

    return (
      <Card data={cards[currentCard]}/>
    );
  }
}

export default Learn;
