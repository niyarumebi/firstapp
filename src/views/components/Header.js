import React, {useState, useEffect} from 'react';
import SearchBar from "./SearchBar";
import HeaderCategory from "./HeaderCategory";
import {Link} from "react-router-dom";
import {navigate} from "../../helpers/HistoryHelper";
import MenuPopup from "./MenuPopup";
import * as _ from "lodash";

function Header(props) {

    const {
        currentPath,
    } = props;

    const [moreMenu, setMoreMenu] = useState({
        isOpen: false,
        isRightSide: false,
    });

    const moreMenuItems = [
        {
            link: 'https://naver.com',
            txt: 'Blog',
        },
        {
            link: 'https://naver.com',
            txt: 'Community',
        },
        {
            link: 'https://naver.com',
            txt: 'History',
        },
        {
            link: 'https://naver.com',
            txt: 'Made with Unsplash',
        },
        {
            link: 'https://naver.com',
            txt: 'API/Developers',
        },
        {
            link: 'https://naver.com',
            txt: 'Press',
        },
        {
            link: 'https://naver.com',
            txt: 'Join the team',
        },
        {
            link: 'https://naver.com',
            txt: 'License',
        },
        {
            link: 'https://naver.com',
            txt: 'Help',
        },
    ];


    const collectionMenuRoutes = [
        {
            name: 'collec',
            to: '/'
        },
        {
            name: 'following',
            to: '/following'
        }
    ];

    const homeMenuRoutes = [
        {
            name: 'Editorial',
            to: '/'
        },
        {
            name: 'following',
            to: '/following'
        }
    ];



    function Menu({routes}) {
        return _.map(routes, route => <div onClick={() => navigate(route.to)}>{route.name}</div>)
    }

    return (
        //className={cn(((e.scorllTop >= 100vh) && 'get-scroll' ))}
        <div className="Header">
            {
                currentPath === '/' &&
                <Menu routes={homeMenuRoutes}/>
            }

            {
                currentPath === '/collections' &&
                <Menu routes={collectionMenuRoutes}/>
            }
            <div className="upper">
                <div className="
                logo">
                    <svg className="_2m4hn" onClick={() => navigate('/')}
                         version="1.1" viewBox="0 0 32 32" width="32" height="32"
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
                        <Link to={'/'} className="link">
                            <div className="txt">Home</div>
                        </Link>
                        <Link to={'/collections'} className="link">
                            <div className="txt">Collections</div>
                        </Link>
                        <div className="link"
                             style={{position: 'relative'}}
                             onClick={() => setMoreMenu({isOpen: !moreMenu.isOpen})}
                        >
                            <div className="txt">
                                <i className="material-icons">more_horiz</i>
                            </div>
                            <MenuPopup
                                items={moreMenuItems}
                                isOpen={moreMenu.isOpen}
                            >
                                <div className="col-wrap">
                                    <Link to={'/'} className="item">
                                        <i className="material-icons">contactless</i>
                                    </Link>
                                    <Link to={'/'} className="item">
                                        <i className="material-icons">contactless</i>
                                    </Link>
                                    <Link to={'/'} className="item">
                                        <i className="material-icons">contactless</i>
                                    </Link>
                                    <Link to={'/'} className="item">
                                        <i className="material-icons">contactless</i>
                                    </Link>
                                </div>

                            </MenuPopup>
                        </div>
                        <Link to={'/submit'} className="link btn-type">
                            <div className="txt">Submit a photo</div>
                        </Link>
                        <div className="bar"></div>
                        {/*로그인 시 종류 변경*/}
                        {/*<div className="link">*/}
                        {/*<i className="material-icons">notification_important</i>*/}
                        {/*</div>*/}
                        <Link to={'/login'} className="link">
                            <div className="txt">Login</div>
                        </Link>
                        <Link to={'/join'} className="link green">
                            <div className="txt">Join free</div>
                        </Link>
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
