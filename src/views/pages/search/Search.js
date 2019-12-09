import React, { useState, useEffect } from 'react';
import Photos from "../../components/Photos";
import {connect} from "react-redux";

function Search (props) {

  const {
      searchResult = []
  } = props;

   console.log("@@ searchResult in Search.js", searchResult);

  return (
          <div className="Search">
              <Photos photos={searchResult}/>
              {/*{*/}
                  {/*searchResult.length > 0 ?*/}
                      {/*<Photos photos={searchResult}/> :*/}
                      {/*<div className="no-data">*/}
                          {/*<p>데이터가 없습니다</p>*/}
                      {/*</div>*/}
              {/*}*/}

          </div>
      )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(Search);