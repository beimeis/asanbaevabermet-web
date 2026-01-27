/* External dependencies */
import React from 'react';
import { Div } from 'atomize';

/* Local dependencies */
import MapVideo from '../../../assets/images/map/Video.mp4';
import './Map.scss';

export default function Map() {
  return (
    <Div p={{ t: '200px' }}>
      <div className="video-wrapper">
        <video className="video" src={MapVideo} autoPlay loop muted playsInline />
      </div>
    </Div>
  );
}
