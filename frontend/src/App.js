import React, { Component } from 'react';

import { Route, HashRouter, Switch } from "react-router-dom";

import Home from './Pages/Home/Home';
import Profile from './Pages/Profile';
import New from './Pages/New';
import Present from './Pages/Present/Present';

class App extends Component {
  
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/learning-present' component={Present} />
          <Route path='/profile' component={Profile} />
          <Route path='/new-learning' component={New} />
        </Switch>
      </HashRouter>

    );
  }
}

export default App;
