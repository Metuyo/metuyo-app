import React, { Component } from 'react';

import { Route, HashRouter, Switch } from "react-router-dom";

import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import New from './Pages/New/New';
import Present from './Pages/Present/Present';
import Sidebar from './Sidebar';

class App extends Component {
  
  render() {
    return (
      <HashRouter>
        <div>
        <Sidebar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/learning-present' component={Present} />
          <Route path='/profile' component={Profile} />
          <Route path='/new-learning' component={New} />
        </Switch>
        </div>
      </HashRouter>

    );
  }
}

export default App;
