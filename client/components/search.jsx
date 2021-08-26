import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    // bind this to click handler for search 
    this.searchFreesound = this.searchFreesound.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
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

    fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        console.log('client')
        console.log(json)
        this.setState({
          items: json.results
        })
      })
      .catch(err => console.error(err));
      console.log(this.state);
  }

  render() {
      const { items } = this.state;
      let searchResults = items.map((item, index) => {
        // build out as a component
        return <li key={index}>{item.id} - {item.name} - uploader: {item.username}</li>
      });
      return(
        <div>
          <h1>Search Samples:</h1>
            <label htmlFor="search">
              Search:
              <input type="text" name="search" id="search" />
            </label>
            <input type="submit" value="Submit" onClick={(e) => this.searchFreesound(e)} />
          <h2>Search Results: </h2>
            <ul>
              {searchResults}
            </ul>
        </div>
      )
    // }
  }
}

export default Search;