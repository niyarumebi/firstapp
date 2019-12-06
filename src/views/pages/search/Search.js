import React, { useState, useEffect } from 'react';
import Photos from "../../components/Photos";

function Search (props) {

  const {
      photos = {}
  } = props;

  console.log("@@ searchResult", photos);

  return (
          <div className="Search">
            Search

              <Photos photos={photos}/>
          </div>
      )
}

export default Search;