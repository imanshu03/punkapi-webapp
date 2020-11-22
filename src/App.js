import React from 'react';
import { Header, Home, Favourites } from './Components';
import './Assets/scss/index.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <div className="App" id="scrollableDiv">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/favourites" component={Favourites} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
