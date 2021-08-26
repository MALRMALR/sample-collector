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

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
          {/* <Route render={() => {
            <Redirect to={{pathname: '/search'}} />
            }}
          >  */}
          <Route path="/api/search" render={() => <div>wtf</div>} >
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