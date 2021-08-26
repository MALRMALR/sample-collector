import React, { Component } from 'react';
// import { useRouteMatch } from 'react-router-dom';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      redirect: null
    }
  }
  render() {
  // let match = useRouteMatch('/api/search');
    return(
      <div>
        <h1>Search Results: </h1>
          <ul>
            {/* {searchResults} */}
          </ul>
      </div>
    )
  }
}

export default Search;