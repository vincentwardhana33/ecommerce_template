import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import About from './components/About';
import Detail from './components/Detail';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/detail/:product_id" component={Detail} />
      </div>
    );
  }
}

export default App;
