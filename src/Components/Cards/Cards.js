import React from 'react';
import { uniqueId } from 'lodash';
import ServiceData from '../../services/serviceData';
import ErrorMessage from '../Error';
import Loader from '../Loader';
import Tag from '../Tag';

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

  renderTags = (tag) => <Tag title={tag} key={uniqueId()} />;

  renderRow = (card) => {
    const { last_repeat, theme } = card;
    const repeatDate = last_repeat !== '' ? new Date(last_repeat).toLocaleDateString() : '-';
    return (
      <tr key={card.id}>
        <td>{card.front}</td>
        <td>{card.back}</td>
        <td>{repeatDate}</td>
        <td>{card.shown}</td>
        <td>{ theme.map(this.renderTags) }</td>
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
            <th>Shown</th>
            <th>Themes</th>
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