import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import HeaderCategory from "./HeaderCategory";
import {Link} from "react-router-dom";


function Header (props) {
  
  const {} = props;
  
  return (
          //className={cn(((e.scorllTop >= 100vh) && 'get-scroll' ))}
          <div className="Header">
            <div className="upper">
                <div className="
                logo">
                    <svg className="_2m4hn" version="1.1" viewBox="0 0 32 32" width="32" height="32"
                         aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash
                        Home</title>
                        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                    </svg>

                    <div className="txt-wrap">
                        <div className="top">Unsplash</div>
                        <div className="bottom">Photos for everyone</div>
                    </div>
                </div>

                <div className="search-wrap">
                    <SearchBar/>
                </div>

                <div className="tools">
                    <div className="links">
                        <Link to={`/collections`} className="link">Collections</Link>
                        <Link to={`/explore`} className="link">Explore</Link>
                        <div className="link">
                            <i className="material-icons">more_horiz</i>
                        </div>
                        <Link to={`/submit`} className="link btn-type">Submit a photo</Link>
                        <div  className="bar"></div>
                        {/*로그인 시 종류 변경*/}
                        {/*<div className="link">*/}
                            {/*<i className="material-icons">notification_important</i>*/}
                        {/*</div>*/}
                        <Link to={`/login`} className="link">Login</Link>
                        <Link to={`/join`} className="link green">Join free</Link>
                    </div>
                </div>
            </div>
              <div className="bottom">
                  <HeaderCategory/>
              </div>
          </div>
      )
}

export default Header;