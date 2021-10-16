import React, { Component } from 'react';

class Sample extends Component {
  constructor(props) {
    super(props);
    this.saveSample = this.saveSample.bind(this);
    this.deleteSample = this.deleteSample.bind(this);
    this.state = {
      samples: []
    }
  }

  saveSample(id, name, url, username, download, description, type, duration, bitdepth,bitrate, samplerate, filesize, num_downloads, avg_rating, geotag, previews) {
    const body = {id, name, url, username, download, description, type, duration, bitdepth, bitrate, samplerate, filesize, num_downloads, avg_rating, geotag, previews}
    fetch('/api/save-sample', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          samples: json
        })
      })
      .catch(err => console.error(err));
  }

  deleteSample(name) {
    const body = {name};
    console.log(body);
    fetch('/api/delete-sample', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error(err));
  }
  
  render() {
    // prevents two audio elements from playing simultaneously
    document.addEventListener('play', function(e){  
      const audios = document.getElementsByTagName('audio');
      const len = audios.length;
      for(let i = 0; i < len; i++){  
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
          <li>File Type: {this.props.type}</li>
          <li>File Size: {this.props.filesize / 1000 / 1000} MB</li>
          <li>Bit Rate: {this.props.bitrate}</li>
          <li>Bit Depth: {this.props.bitdepth}</li>
          <li>Duration: {this.props.duration} seconds</li>
          <li>Sample Rate: {this.props.samplerate} Hz</li>
          <li>Number of Downloads: {this.props.num_downloads}</li>
          <li>Average Rating: {this.props.avg_rating}</li>
          <li>Uploaded by: {this.props.username}</li>
          <li>Geotag: {this.props.geotag}</li>
        </ul>
          <h4>File Description:</h4>
          <p>{this.props.description}</p>
        <button className="save-button" onClick={() => { 
          this.saveSample(
            this.props.id, 
            this.props.name, 
            this.props.url, 
            this.props.username, 
            this.props.download, 
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
        <button className="delete-button" onClick={() => {
          // console.log(this.props.id);
          this.deleteSample(this.props.name)
        }}>Delete Sample</button>
      </div>
    )
  }
}


export default Sample;