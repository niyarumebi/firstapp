import React, {useState, useEffect} from 'react';
import Photos from "../../components/Photos";
import {connect} from "react-redux";
import NoData from "../../components/NoData";
import Tab from "../../components/Tab";

function Search(props) {

    const {
        searchPhotos = []
    } = props;


    return (
        <div className="Search">

            <Tab></Tab>

          <div className="container">
              {
                  searchPhotos.length > 0 ?
                      <Photos photos={searchPhotos}/> :
                      <NoData/>
              }
          </div>

        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(Search);