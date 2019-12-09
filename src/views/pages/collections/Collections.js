import React, { useState, useEffect } from 'react';
import Collection from "../../components/Collection";
import MenuPopup from "../../components/MenuPopup";
import {Link} from "react-router-dom";

function Collections (props) {
  
  const {} = props;
  
  return (
          <div className="Collections">
              {/* map 돌리기 */}
              <Collection/>
              <Collection/>
              <Collection/>
              <Collection/>

              <MenuPopup>
                  <div className="col-wrap">
                      <Link to={'/'} className="item">ㅁ</Link>
                      <Link to={'/'} className="item">ㅁ</Link>
                      <Link to={'/'} className="item">ㅁ</Link>
                      <Link to={'/'} className="item">ㅁ</Link>
                  </div>
              </MenuPopup>
          </div>
      )
}

export default Collections;