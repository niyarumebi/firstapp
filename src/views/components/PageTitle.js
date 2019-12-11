import React, { useState, useEffect } from 'react';

function PageTitle (props) {

  const {
      title = '타이틀 입력',
      msg = 'msg 입력',
      link = '',
      linkTxt = '',
  } = props;

  return (
          <div className="PageTitle">
              <div className="title-wrap">
                  <div className="title">{title}</div>
                  <div className="msg">
                      {msg}
                      { link.length > 0 && <a href={link}>{linkTxt}</a>}
                  </div>
              </div>
          </div>
      )
}

export default PageTitle;