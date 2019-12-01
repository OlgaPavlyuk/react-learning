import React from 'react';
import ServiceData from '../../services/serviceData';
import ErrorMessage from '../Error';
import Loader from '../Loader';

 
class Cards extends React.Component {
  ServiceData = new ServiceData();

  state = {
    cards: [],
    error: null,
    errorMsg: '',
    loading: true
  };

  componentDidMount() {
    this.ServiceData.getAllCards()
    .then(this.onCardsLoaded)
    .catch(this.onError)
  }

  onCardsLoaded = (cards) => {
    console.log(cards);
    this.setState({
      cards,
      error: false,
      errorMsg: '',
      loading: false,
    });
  }

  onError = (error) => {
    this.setState({
      error: true,
      errorMsg: error.message,
      loading: false,
    });
  }

  renderRow = (card) => {
    return (
      <tr key={card.id}>
        <td>{card.front}</td>
        <td>{card.back}</td>
        <td>{card.last_repeat}</td>
      </tr>
    );
  }

  renderTable = () => {
    const { cards } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th>Front</th>
            <th>Back</th>
            <th>Last repeat</th>
          </tr>
        </thead>
        <tbody>
          {cards.map(this.renderRow)}
        </tbody>
      </table>
    );
  }

  render() {
    const { error, errorMsg, loading } = this.state;

    if (loading) {
      return <Loader />
    }

    if (error) {
      return <ErrorMessage message={errorMsg} />
    }

    return (
      this.renderTable()
    );
  }
}

export default Cards;