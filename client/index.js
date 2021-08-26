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
// import styles
import styles from './scss/styles.scss';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
          <Route path="/search">
            <Search />
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