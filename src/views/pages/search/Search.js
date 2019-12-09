import React, { useState, useEffect } from 'react';
import Photos from "../../components/Photos";
import {connect} from "react-redux";
import Header from "../../components/Header";

function Search (props) {

  const {
      searchResult = {}
  } = props;

  return (
          <div className="Search">

              <Header/>

              <Photos photos={searchResult}/>
          </div>
      )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(Search);