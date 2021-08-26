import React, {Component} from 'react';

const Sample = (props) => {

  return (
    <div className='sample-card'>
      <ul>
        <li>{props.id}</li>
        <li>{props.name}</li>
        <li>{props.username}</li>
      </ul>
      <button id="load-button">Load Sample</button>
      <button id="save-button">Save Sample</button>
    </div>
  )
}

export default Sample;