import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import './Panorama.css';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const PanoramaComponent = ({params, panos, goBack}) => {
  return (
    <Scene>
      <Entity primitive='a-sky' src={"/PanoGallery/VR/"+params.id+".jpg"}/>
      <Entity primitive='a-camera' position="0 2 4">
        <Entity
          primitive='a-cursor'
          color='#4CC3D9'
          fuse='true'
          timeout='5'
        />
      </Entity>
      <Entity
        text={{value: "Look below to go back", width: 10}}
        position='0 8 -3'
      />
      <Entity
        primitive='a-sphere'
        radius='1'
        color='teal'
        position='0 0 4'
        events={{click: ()=>{goBack();}}}
      />
    </Scene>
  );
}

const mapStateToProps = (state) => {
  return {
    panos: state.galleryState.panos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goBack: (id) => {
      dispatch(push('/PanoGallery'));
    }
  }
}

const Panorama = connect(
  mapStateToProps,
  mapDispatchToProps
)(PanoramaComponent)

export default Panorama;
