import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/landing'
import Search from './pages/search/search';
import Settings from './pages/settings/settings';




function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/search" exact component={Search} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
