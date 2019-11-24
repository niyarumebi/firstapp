import React, { useState, useEffect } from 'react';
import Photos from "../../components/Photos";
import store from "../../../mock/store";

function Search (props) {

  const {} = props;

  return (
          <div className="Search">
            Search
              <Photos photos={store.state.search}/>
          </div>
      )
}

export default Search;