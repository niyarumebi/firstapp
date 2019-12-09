import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";

function User (props) {

  const {

  } = props;


  const params = props.match.params.username;

  useEffect(() => {
      // dispatch
  }, [])

  // onClick={() => onClickUserLink(photo.user.name)}
  return (
          <div className="User">
            User

          </div>
      )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(User);