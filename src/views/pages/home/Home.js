import React, {useState, useEffect} from 'react';
import store from "../../../mock/store";
import Photos from "../../components/Photos";
import SearchBar from "../../components/SearchBar";
import axios from "axios";
import {connect} from "react-redux";
import Action from '../../../redux/action'


function Home(props) {
    const {
        dispatch,
    } = props;

    const accessKey = '2ccbe25b22646226acd40ad7bd94d104fdade080b74c50c2d1e05448dfd348c4';
    useEffect(() => {
        getPhotos();
    }, []);

    async function getPhotos() {
        const result = await axios.get(`https://api.unsplash.com/photos/?client_id=${accessKey}`);
        dispatch(Action.Creators.setPhotos(result.data));
    }

    return (
        <div className="Home">
            <div className="main-visual">
                <div className="main-txt">
                    <p className="t1">Unsplash</p>
                    <p className="t2">The internet’s source of freely usable images.</p>
                    <p className="t2">Powered by creators everywhere.</p>
                    <SearchBar/>
                    <p className="sub">
                        <span className="bold">Trending: </span>
                        flower, wallpapers, backgrounds, happy, love
                    </p>
                </div>
                <div className="bottom-txt">
                    <div>Photo of the Day <span>by</span>Martin Schmidli</div>
                    <div><span>Read more about the</span>Unsplash License</div>
                    <div>
                        <img
                            src="https://cdn4.buysellads.net/uu/7/41629/1545953812-1543526594-transparent_squarespace.png"
                            alt=""/>
                        <p>Create your website today</p>
                    </div>
                </div>
            </div>
            <Photos/>
        </div>
    )
}

export default connect((state => ({...state})), (dispatch) => ({dispatch}))(Home);