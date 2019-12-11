import React, { useState, useEffect } from 'react';
import Collection from "../../components/Collection";
import MenuPopup from "../../components/MenuPopup";
import {Link} from "react-router-dom";
import PageTitle from "../../components/PageTitle";

function Collections (props) {
  
  const {} = props;
  
  return (
          <div className="Collections">
              <PageTitle
                  title={'Collections'}
                  msg={'Explore the world through collections of beautiful photos free to use under the '}
                  link= {'/'}
                  linkTxt = {'Unsplash License'}
              />

             <div className="align-wrap">
                 <div className="collection-wrap">
                     <Collection/>
                     <Collection/>
                     <Collection/>
                     <Collection/>
                 </div>
             </div>

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