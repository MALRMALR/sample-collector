import React, { Component } from 'react';

class Sample extends Component {
  constructor(props) {
    super(props);
    this.saveSample = this.saveSample.bind(this);
  }

  saveSample(id, name, url, username, download_url, description, type, duration, bitdepth,bitrate, samplerate, filesize, num_downloads, avg_rating, geotag, previews) {
    const body = {id, name, url, username, download_url, description, type, duration, bitdepth, bitrate, samplerate, filesize, num_downloads, avg_rating, geotag, previews}
    fetch('/api/saveSample', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error(err));
    
  }
  componentDidUpdate() {
  }
  
  render() {
    // prevents two audio elements from playing simultaneously
    document.addEventListener('play', function(e){  
      const audios = document.getElementsByTagName('audio');  
      for(let i = 0, len = audios.length; i < len;i++){  
          if(audios[i] != e.target){  
              audios[i].pause();  
          }
      }  
    }, true);

    return (  
      <div className='sample-card'>
        <audio controls preload="none" src={this.props.previews}></audio>
        <h4>{this.props.name}</h4>
        <div>
        <a href={this.props.url} target="_blank" className="sample-card-url">
          View on Freesound.org
        </a> |
        <a href={this.props.download} className="sample-card-url">
          {/* {this.props.download} */}
          Download Audio File
        </a>
        </div>
        <ul>
          {/* <li>{this.props.id}</li> */}
          {/* <li>{this.props.name}</li> */}
          {/* <li>Freesound URL: 
          </li> */}
          <li>File Type: {this.props.type}</li>
          <li>File Size: {this.props.filesize / 1000 / 1000}</li>
          <li>Bit Rate: {this.props.bitrate}</li>
          <li>Bit Depth: {this.props.bitdepth}</li>
          <li>Duration: {this.props.duration}</li>
          <li>Sample Rate: {this.props.samplerate}</li>
          {/* <li>Download URL: 
          </li> */}
          <li>Number of Downloads: {this.props.num_downloads}</li>
          <li>Average Rating: {this.props.avg_rating}</li>
          <li>Uploaded by: {this.props.username}</li>
          {/* <li>{this.props.previews['preview-hq-mp3']}</li> */}

          <li>Geotag: {this.props.geotag}</li>
        </ul>
          <h4>File Description:</h4>
          <p>{this.props.description}</p>
        {/* <button id="load-button" onClick={() => this.loadSample(this.props.id)}>Load Sample</button> */}
        <button id="save-button" onClick={() => { 
          this.saveSample(
            this.props.id, 
            this.props.name, 
            this.props.url, 
            this.props.username, 
            this.props.download_url, 
            this.props.description,
            this.props.type,
            this.props.duration,
            this.props.bitdepth,
            this.props.bitrate,
            this.props.samplerate,
            this.props.filesize,
            this.props.num_downloads,
            this.props.avg_rating,
            this.props.geotag, 
            this.props.previews)
        }}>Save Sample</button>
      </div>
    )
  }
}


export default Sample;