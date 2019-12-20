import React, { useState, useEffect } from 'react';
import { IoMdPersonAdd } from "react-icons/io";

function UserCard (props) {
  
  const {
      user
  } = props;
  
  return (
          <div className="UserCard" onClick={() =>{

          }}>
              <div className="info-wrap">
                  <div className="thumb"></div>
                  <div className="desc">
                      <p className="bold">{user.name}</p>
                      <p className="id">@{user.id}</p>
                  </div>
              </div>
              <div className="btn-follow">
                  <IoMdPersonAdd/> Follow
              </div>
          </div>
      )
}

export default UserCard;