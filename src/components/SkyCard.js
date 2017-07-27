import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';

const SkyCard = ({text, color, onGazeClick}) => {
  return (
    <Entity
      geometry="primitive: plane; height: 2; width: 2;"
      events={{click: ()=>{onGazeClick();}}}
      material={{color: color}}
      text={{value: text, wrapCount: 10}}
    />
  );
}

export default SkyCard;