import React from 'react';
import './Card.css';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const CardComponent = ({id, url, name, goToPanorama}) => {
  return (
    <div className="card" onClick={()=>{goToPanorama(id)}}>
      <img src={url} alt="thumbnail"/>
      <h2>{name}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    //
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToPanorama: (id) => {
      dispatch(push('/'+id));
    }
  }
}

const Card = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardComponent)


export default Card;