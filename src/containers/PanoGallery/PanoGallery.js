import React, { Component } from 'react';
import './PanoGallery.css';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Card from '../../components/Card/Card';
import { callDataLoad } from '../../actions';

class PanoGalleryComponent extends Component {

  componentDidMount() {
    if(this.props.panos.length===0) {
      this.props.loadData();
    }
  }

  render() {
    if(this.props.status==='success') {
      return (
        <div className="container">
          {this.props.panos.map((pan, index)=>{
            return <Card key={index} url={pan.pano} name={pan.name} id={index}/>;
          })}
        </div>
      );
    }
    else {
      return (
        <div className="container">
          <h1>{this.props.status}</h1>
        </div>
      );
    }
  }

}

const mapStateToProps = (state) => {
  return {
    panos: state.galleryState.panos,
    status: state.galleryState.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewImage: (id) => {
      dispatch(push('/PanoGallery/'+id));
    },
    loadData: () => {
      dispatch(callDataLoad());
    }
  }
}

const PanoGallery = connect(
  mapStateToProps,
  mapDispatchToProps
)(PanoGalleryComponent)

export default PanoGallery;
