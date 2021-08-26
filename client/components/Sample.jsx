import React, { Component } from 'react';

class Sample extends Component {
  constructor(props) {
    super(props);
    this.saveSample = this.saveSample.bind(this);
  }

  saveSample(id) {
    console.log(id);
  }

  render() {
    return (  
      <div className='sample-card'>
        <audio controls src={this.props.previews['preview-hq-mp3']}></audio>
        <ul>
          <li>{this.props.id}</li>
          <li>{this.props.name}</li>
          <li>URL: 
            <a href={this.props.url} target="_blank">
              {this.props.url}
            </a>
          </li>
          <li>File Type: {this.props.type}</li>
          <li>File Size: {this.props.filesize / 1000 / 1000}</li>
          <li>Bit Rate: {this.props.bitrate}</li>
          <li>Bit Depth: {this.props.bitdepth}</li>
          <li>Duration: {this.props.duration}</li>
          <li>Sample Rate: {this.props.samplerate}</li>
          <li>Download URL: 
            <a href={this.props.download}>
              {this.props.download}
            </a>
          </li>
          <li>Number of Downloads: {this.props.num_downloads}</li>
          <li>Average Rating: {this.props.avg_rating}</li>
          <li>Uploaded by: {this.props.username}</li>
          <li>{this.props.previews['preview-hq-mp3']}</li>

          <li>Geotag: {this.props.geotag}</li>
        </ul>
          <p>{this.props.description}</p>
        {/* <button id="load-button" onClick={() => this.loadSample(this.props.id)}>Load Sample</button> */}
        <button id="save-button">Save Sample</button>
      </div>
    )
  }
}


export default Sample;