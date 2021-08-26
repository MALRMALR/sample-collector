import React, {Component} from 'react';
const fetch = require('node-fetch');
import Sample from './Sample.jsx';

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      samples: [],
      fetchedSamples: false
    }
  }

  componentDidMount(){
    fetch('/api/view-all')
      .then(res => res.json())
      // .then(json => console.log(json))
      .then(samples => {
        if (!Array.isArray(samples)) samples = [];
        return this.setState({
          samples,
          fetchedSamples: true
        })
      })
      .catch(err => console.error(err));
  }
  
  render() {
    const { samples } = this.state;
    const sampleElems = samples.map((sample, i) => {
      console.log(sample);
      return (
        <Sample 
          key={i}
          name={sample.name}
          previews={sample.previews}
          url={sample.url}
          download={sample.download_url}
          type={sample.type}
          filesize={sample.file_size}
          bitrate={sample.bitrate}
          bitdepth={sample.bitdepth}
          duration={sample.duration}
          samplerate={sample.sample_rate}
          num_downloads={sample.num_downloads}
          avg_rating={sample.avg_rating}
          geotag={sample.geotag}
          description={sample.description}
          username={sample.username}
        />
      )
    })
    return (
      <div id="saved-samples">
        <h1>Saved Samples:</h1>
        <div className="sample-card-container">
          {sampleElems}
        </div>
      </div>
    )
  }
}

export default Saved;