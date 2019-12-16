import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Cards from './Components/Cards/Cards';
import Learn from './Components/Cards/Learn';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import About from './Components/About';
import Elements from './Components/Elements';
import Footer from './Components/Footer';

function App() {
  /* todo: the theme changing in a proper way  */
  const [theme, setTheme] = useState('pink');

  const changeTheme = (newTheme) => {
    return setTheme(newTheme);
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Header theme={theme} onChangeTheme={changeTheme} />
        <main>
          <section className="content">
            <div className="container">
              <Route path='/' component={MainContent} exact/>
              <Route path='/cards/' component={Cards} exact/>
              <Route path='/learn/' component={Learn} exact/>
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

export default App;
