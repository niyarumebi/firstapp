import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import TagList from "./TagList";
import TextTab from "./TextTab";
import IconTab from "./IconTab";

function Collection (props) {
  
  const {} = props;
  
  return (
          <div className="Collection">
            <div className="thumbs-wrap">
                <div className="col">
                    <img src="https://pbs.twimg.com/profile_images/3572978953/8c522d3ea384cd42e46a4a2498300c35_400x400.jpeg" alt=""/>
                </div>
                <div className="col2">
                    <div className="thumb">
                        <img src="https://pbs.twimg.com/profile_images/3572978953/8c522d3ea384cd42e46a4a2498300c35_400x400.jpeg" alt=""/>
                    </div>
                    <div className="thumb">
                        <img src="https://pbs.twimg.com/profile_images/3572978953/8c522d3ea384cd42e46a4a2498300c35_400x400.jpeg" alt=""/>
                    </div>
                </div>
            </div>

              <div className="desc-wrap">
                  <div className="title">public_t2</div>
                  <div className="summary">2 photos · Curated by <Link to={'/yhompi'}>yhompi ch</Link></div>
                  <TagList/>
              </div>
              
          </div>
      )
}

export default Collection;