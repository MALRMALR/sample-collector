import React, {Component} from 'react';
import {
  Redirect
} from 'react-router-dom';

import Login from './Login.jsx';
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      cookie: null
    }
  }
  render() {
    if (this.state.cookie) {
      return <Redirect to='/api/search' />
    }
    return (
      <div>
          <h1>Sample Collector</h1>
          <a href="http://localhost:3000/api/login">Log In</a>
          {/* <Login /> */}
      </div>
    )
  }

}

export default Landing;