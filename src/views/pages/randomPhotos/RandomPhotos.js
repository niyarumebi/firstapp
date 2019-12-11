import React, { useState, useEffect } from 'react';
import Photos from "../../components/Photos";
import PageTitle from "../collections/Collections";
import {connect} from "react-redux";
import Action from "../../../redux/action";

function RandomPhotos (props) {

  const {
      dispatch,
      randomPhotos
  } = props;

  useEffect(() => {
     dispatch(Action.Creators.fetchRandomPhotos());
  });

  return (
          <div className="RandomPhotos">
              <PageTitle
                  title={'Random Photos'}
                  msg={'Photos spreaded among Unsplash data'}
              />
              <Photos photos={randomPhotos}></Photos>
          </div>
      )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(RandomPhotos);