import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Cards from './Components/Cards/Cards';
import Learn from './Components/Cards/Learn';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import About from './Components/About';
import Elements from './Components/Elements';
import Footer from './Components/Footer';

import fetchCardsAction from './services/fetchCards';

const mapStateToProps = ({ theme, cards }) => ({
  theme,
  cardsData: cards.cardsData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCardsData: () => dispatch(fetchCardsAction()),
});

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCardsData();
  }

  render() {
    const { colorTheme } = this.props.theme;
    return (
      <Router>
        <div className={`app ${colorTheme}`}>
          <Header />
          <main>
            <section className="content">
              <div className="container">
                <Route path='/' component={MainContent} exact />
                <Route path='/cards/' component={Cards} exact />
                <Route path='/learn/' component={Learn} exact />
                <Route path='/elements/' component={Elements} exact />
                <Route path='/about/' component={About} exact />
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
