import React, { useState, useEffect } from 'react';

function SearchBar (props) {

  const {
      placeholder = 'Search free high-resolution photos'
  } = props;

  return (
          <div className="SearchBar">
              <i className="material-icons">search</i>
              <input type="text" placeholder={placeholder}/>
          </div>
      )
}

export default SearchBar;