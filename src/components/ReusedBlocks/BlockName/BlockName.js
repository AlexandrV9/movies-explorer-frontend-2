import React from 'react';
import './BlockName.css';

function BlockName(props) {
  return (
    <div className="block-name"id={props.id}>
      <h2 className="block-name__title">{props.name}</h2>
      <div className="block-name__decoration-line"></div>
    </div>
  );
}

export default BlockName;