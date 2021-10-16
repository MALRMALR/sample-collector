import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import Landing from './components/Landing.jsx';
import Search from './components/Search.jsx';
import Saved from './components/Saved.jsx';
// import styles
import styles from './scss/styles.scss';

function App() {
  return (
    <div>
      <Router>
        {/* menu navigation */}
        <div>
          <ul>
            <li>
              <Link to="/view">View Saved Samples</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </div>
        {/* routing */}
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/view">
            <Saved />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);