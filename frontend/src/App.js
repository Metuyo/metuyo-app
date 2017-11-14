import React, { Component } from 'react';

import { Route, HashRouter } from "react-router-dom";

import Home from './Pages/Home/Home';
import Profile from './Pages/Profile';
import New from './Pages/New';
import Present from './Pages/Present/Present';

class App extends Component {
  
  render() {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={Home} />
          <Route path='/learning-present' component={Present} />
          <Route path='/profile' component={Profile} />
          <Route path='/new-learning' component={New} />
        </div>
      </HashRouter>

    );
  }
}

export default App;
