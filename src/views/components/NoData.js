import React, { useState, useEffect } from 'react';

function NoData (props) {

  const {
      img = '',//local 경로?
      msg = '데이터가 없습니다.'
  } = props;

  return (
          <div className="NoData">
              <i className="material-icons">directions_run</i>
              <div className="msg">
                  데이터가 없습니다.
              </div>

          </div>
      )
}

export default NoData;