import React, {Component} from 'react';
const fetch = require('node-fetch');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    // fetch(`https://freesound.org/apiv2/search/text?query=whale&token=g428HB1teEhwYBuO3nPtlngcUSdSvEZ0iixuA9EY`)
    //   .then(res => res.json())
    //   .then(response => {
    //     console.log(response);
    //     this.setState({
    //       isLoaded: true,
    //       items: response.results
    //     })
    //   },
    //   (error) => {
    //     this.setState({
    //       isLoaded: true,
    //       error
    //     });
    //   }
    // )

  }
  
  render() {
    // const { error, isLoaded, items } = this.state;
    // if (error) {
    //   return <div>Error: {error}</div>
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>
    // } else {
    //   let searchResults = items.map((item, index) => {
    //     return <li key={index}>{item.name}</li>
    //   });
    //   console.log(searchResults);
      return(
        <div>
          <div>
            <h1>Sample Collector</h1>
            <a href="http://localhost:3000/api/login">Log In</a>
            <button id="sign-up">Sign Up</button>
          </div>
          {/* hard coded search results from fetch req above */}
          {/* <h1>Search Results: </h1>
            <ul>
              {searchResults}
            </ul> */}
        </div>
      )
    // }

  }
}

export default App;