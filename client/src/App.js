import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/layout/Navbar';



library.add(fab, faIdCardAlt );

const App = () => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;
