import React, {Component} from 'react';
import {
  Redirect
} from 'react-router-dom';
import Cookies from 'js-cookie';
// import Login from './Login.jsx';
import Search from './Search.jsx';
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      cookie: null
    }
  }

  componentDidMount() {
    const accessToken = Cookies.get('access_token');
    if (accessToken) {
      this.setState({
        cookie: accessToken
      });
    }
  }
  
  render() {
    if (this.state.cookie) {
      // return <Redirect to='/search' />;
      return (
        <div>
          <Search cookie={this.state.cookie} />
        </div>
      )
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