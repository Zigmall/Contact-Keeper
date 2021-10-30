import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faIdCardAlt, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/ContactState';



library.add(fab, faIdCardAlt, faEnvelopeOpen,faPhone );

const App = () => {
  return (
    <ContactState>
      <Router>
        <>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </>
      </Router>
    </ContactState>
  );
};

export default App;
