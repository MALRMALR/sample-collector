import React, {Component} from 'react';
import {
  Redirect
} from 'react-router-dom';
import Cookies from 'js-cookie';
// import Login from './Login.jsx';
import Search from './Search.jsx';
import Saved from './Saved.jsx';
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      cookie: null,
      redirect: null,
      samples: []
    }
  }

  componentDidMount() {
    const accessToken = Cookies.get('access_token');
    if (accessToken) {
      this.setState({
        cookie: accessToken,
        redirect: 'search'
      });
    }
  }


  render() {
    if (this.state.cookie && this.state.redirect === 'search') {
      // return <Redirect to='/search' />;
      return (
        <div>
          <Search cookie={this.state.cookie} />
          {/* <Saved /> */}
        </div>
      )
    }
    return (
      <div id="main-login">
          <a href="http://localhost:3000/api/login">Log In</a>
          {/* <Login /> */}
      </div>
    )
  }

}

export default Landing;