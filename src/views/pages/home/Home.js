import React, {useState, useEffect} from 'react';
import Photos from "../../components/Photos";
import SearchBar from "../../components/SearchBar";
import {connect} from "react-redux";
import Action from '../../../redux/action'


function Home(props) {
    const {
        dispatch,
    } = props;

    //일단 한번만 실행함 > 내부에 선언해놓은 인풋값이 변하면 다시 실행하겠단
    useEffect(() => {
        // getPhotos();
        dispatch(Action.Creators.fetchPhotos()); //뷰랑 비동기-로직들이 분리되는 순간~~~ 꺌뀸
    }, []);


    //함수를 async 함수로. 비동기처리할수있는 함수임. => 고로 리턴시 무조건 promise 로 리턴함
    // async function getPhotos() {
    //     // const result = await axios.get(`${BASE_URL}${ACCESS_KEY}`);
    //     // const result = await request('get', 'photos',);
    //     // const test = FetchHelper.fetchJsonGet('photos').then((res) => {
    //     //     console.log("@@ res", res);
    //     // });
    //     // console.log("@@ test", test);
    //
    //
    //     //await 써주면 모두 처리완료된 이후에 다음줄로 넘어가짐
    //     const result = await FetchHelper.fetchJsonGet('photos');
    //     // dispatch(Action.Creators.setPhotos(result.data));
    //
    //
    //     // dispatch(Action.Creators.fetchPhotos());
    //     // dispatch(Action.Creators.updateState({photos: result.data}));
    //
    //     //1. async 함수는 무조건 뭘 리턴해? Promise 객체를 리턴한다.
    //     //2. async 함수 내부에서는 await을 사용할 수 있다.
    //     //3. await은 Promise를 데이터를 열어볼 수 있고, (순서를 보장) 순차적 진행을 보장한다. 그래서 'await'이긔
    //     //4. 결론 : 얘네가 하고싶은것. 어싱크한 짓을 싱크하게 하고싶다. (순서가 원랜 보장안됨, 왜냐면 바로 next순서로 넘어가기때문이다.) 프로세스가 예상이 되도록. 직관적으로.
    //
    // }

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