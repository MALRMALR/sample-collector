import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    // bind this to click handler for search 
    this.searchFreesound = this.searchFreesound.bind(this);
  }

  searchFreesound(e) {
    const query = e.target.previousSibling.nextSibling.previousSibling.childNodes[1].value;
    console.log(query);
    console.log(this.props.cookie);
    const cookie = this.props.cookie;
    const body = {
      query,
      cookie
    }
    const reqHeaders = new Headers();
    reqHeaders.append('Authorization', 'Bearer ' + cookie);
    console.log(reqHeaders);
    const url = `https://freesound.org/apiv2/search/text/${query}`;
    console.log(url);
    fetch(url, {
      method: 'POST',
      headers: reqHeaders,
      'Content-Type': 'application/json'
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error(err));
  }

  render() {
    return(
      <div>
        <h1>Search Samples:</h1>
          <label htmlFor="password">
            Search:
            <input type="text" name="search" id="search" />
          </label>
          <input type="submit" value="Submit" onClick={(e) => this.searchFreesound(e)} />
        <h2>Search Results: </h2>
          <ul>
            {/* {searchResults} */}
          </ul>
      </div>
    )
  }
}

export default Search;