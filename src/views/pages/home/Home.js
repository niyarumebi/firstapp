import React, {useState, useEffect} from 'react';
import Photos from "../../components/Photos";
import SearchBar from "../../components/SearchBar";
import {connect} from "react-redux";
import Action from '../../../redux/action'
import Toast from "../../components/Toast";


function Home(props) {
    const {
        dispatch,
        recentPhotos,
    } = props;

    //일단 한번만 실행함 > 내부에 선언해놓은 인풋값이 변하면 다시 실행하겠단 .. 그게 input괄호구나.. 그래서 계속 갱신됐던;
    useEffect(() => {
        // getPhotos(); //이건 어떻게 했었는 지 기억안난다.
        dispatch(Action.Creators.fetchPhotos()); //뷰랑 비동기-로직들이 분리되는 순간~~~ 꺌뀸
    }, []);

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
            <div className="container">
                <Photos photos={recentPhotos}/>
            </div>
        </div>
    )
}

export default connect((state => ({...state})), (dispatch) => ({dispatch}))(Home);