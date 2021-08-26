import React, { Component } from 'react';
import Sample from './Sample.jsx';

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
    console.log(e.target.previousSibling.nextSibling.previousSibling.childNodes[0].value);
    const query = e.target.previousSibling.nextSibling.previousSibling.childNodes[0].value;
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
          isLoaded: true,
          items: json.results
        })
      })
      .catch(err => console.error(err));
      console.log(this.state);
  }

  render() {
      const { items } = this.state;
      let searchResults = items.map((item, index) => {
        return <Sample 
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                url={item.url}
                previews={item.previews['preview-hq-mp3']}
                geotag={item.geotag}
                type={item.type}
                filesize={item.filesize}
                duration={item.duration}
                samplerate={item.samplerate}
                bitrate={item.bitrate}
                bitdepth={item.bitdepth}
                download={item.download}
                num_downloads={item.num_downloads}
                avg_rating={item.avg_rating}
                username={item.username}/>
      });
      return(
        <div>
          <h1>Search Samples:</h1>
            <label htmlFor="search">
              <input type="text" name="search" id="search" />
            </label>
            <input type="submit" value="Submit" id="search-button" onClick={(e) => this.searchFreesound(e)} />
          <h2>Search Results: </h2>
            <div className="sample-card-container">
              {searchResults}
            </div>
        </div>
      )

  }
}

export default Search;