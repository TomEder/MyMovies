import './App.css';
import Landing from './pages/landing/landing'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Movies from './pages/movies/movies';
import TvPage from './pages/TV_page/tv_page';
import Search from './pages/search/search';
import Settings from './pages/settings/settings';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/movies" component={Movies} />
          <Route path="/tv" component={TvPage} />
          <Route path="/search" component={Search} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
