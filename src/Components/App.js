import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Cards from './Cards/Cards';
import LearnContainer from './Cards/LearnContainer';
import Header from './Header';
import MainContent from './MainContent';
import About from './About';
import Elements from './Elements';
import Footer from './Footer';

const mapStateToProps = ({ theme }) => ({
  theme,
});

class App extends React.Component {
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
                <Route path='/learn/' component={LearnContainer} exact />
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

export default connect(mapStateToProps)(App);
