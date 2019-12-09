import React, { useState, useEffect } from 'react';
import {navigate} from "../../helpers/HistoryHelper";

function HeaderUnderCate (props) {

  const {
      item = {}
  } = props;

  return (
          <div className="HeaderUnderCate">
              <div className="tab-head">
                  <i className="material-icons">insert_photo</i>
                  Photos 76
              </div>
              <div className="tab-head">
                  <i className="material-icons">favorite</i>
                  Likes 76
              </div>
              <div className="tab-head">
                  <i className="material-icons">photo_album</i>
                  Collections 1
              </div>
          </div>
      )
}

export default HeaderUnderCate;