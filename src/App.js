import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Cards from './Components/Cards/Cards';
import Learn from './Components/Cards/Learn';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Elements from './Components/Elements';

function App() {
  return (
    <Router>
      <div className="app purple">
        <Header />
        <main>
          <section className="content">
            <div className="container">
              <Route path='/' component={MainContent} exact/>
              <Route path='/cards/' component={Cards} exact/>
              <Route path='/learn/' component={Learn} exact/>
              <Route path='/elements/' component={Elements} exact/>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="container">
            Footer
            <br />
            <a href="https://www.figma.com/file/tRtdlPcgS602OuW5rPSooB/Eggplore-Style-Guide---Freebie-(Copy)?node-id=0%3A1">figma</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
