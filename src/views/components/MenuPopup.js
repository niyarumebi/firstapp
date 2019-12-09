import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

function MenuPopup (props) {
  
  const {
      children
  } = props;
  
  return (
          <div className="MenuPopup open-active right-side">
            {/*left carot, right carot,  row, col icon(slot으로 추가하는 거 찾아봐도 될듯)*/}
            {/*부모에 por 달고, 자식요소로 메뉴팝업 여는거 */}

              <Link to={'/'} className="item">teststets</Link>
              <Link to={'/'} className="item">teststets</Link>
              <Link to={'/'} className="item">teststets</Link>
              <Link to={'/'} className="item">teststets</Link>
              <Link to={'/'} className="item">teststets</Link>
              <Link to={'/'} className="item">teststets</Link>

              {props.children}
              
          </div>
      )
}

export default MenuPopup;