import React from 'react';

export default function GifList(props) {
  return <div>
      <ul>
          {props.gifs.data.map( gif => <li>{gif}</li>)}
      </ul>
  </div>;
}

GifList.defaultProps = {
    data: [ "nogif1", "nogif2", "nogif3"]
  }