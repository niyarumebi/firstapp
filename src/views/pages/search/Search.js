import React, {useState, useEffect} from 'react';
import Photos from "../../components/Photos";
import {connect} from "react-redux";
import NoData from "../../components/NoData";
import PageCategory from "../../components/PageCategory";

function Search(props) {

    const {
        searchResult = []
    } = props;

    console.log("@@ searchResult in Search.js", searchResult);

    return (
        <div className="Search">

            <PageCategory></PageCategory>

          <div className="container">
              {
                  searchResult.length > 0 ?
                      <Photos photos={searchResult}/> :
                      <NoData/>
              }
          </div>

        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(Search);