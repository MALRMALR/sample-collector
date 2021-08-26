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
        {/* <div>
          <ul>
            <li>
              <Link to="/view">View Saved Samples</Link>
            </li>
          </ul>
        </div> */}
        {/* routing */}
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/view">
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