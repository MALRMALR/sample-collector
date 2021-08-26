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
    
    const cookie = this.props.cookie;
    const body = {
      query,
      cookie
    }
    console.log(cookie);
    console.log(body);
    // let reqHeaders = new Headers({'Authorization': 'Bearer ' + cookie});
    // console.log(reqHeaders);
    // const url = `https://freesound.org/apiv2/search/text/${query}`;
    // console.log(url);
    // fetch(url, {
    //   method: 'POST',
    //   headers: reqHeaders,
    //   'Content-Type': 'application/json'
    // })
    //   .then(res => res.json())
    //   .then(json => console.log(json))
    //   .catch(err => console.error(err));
      // should express handle this request?
    console.log(JSON.stringify(body));
    fetch('/api/search', {
      method: 'POST',
      body,
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