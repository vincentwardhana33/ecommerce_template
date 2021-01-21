import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
