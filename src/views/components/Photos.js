import React, {useState, useEffect} from 'react';
import * as _ from 'lodash';
import PhotoCard from "./PhotoCard";
import PhotoDetail from "./PhotoDetail";
import {connect} from "react-redux";
import Action from "../../redux/action";

function Photos(props) {

    const {
        dispatch,
        selectedPhoto,
        photos = [],
    } = props;


    let item_length = photos.length;
    const unit = 3;
    const chunk_unit = Math.floor((item_length / unit)) + 1;
    const _photos = _.chunk(photos, chunk_unit); // 사이즈를 3으로하면 안되고 3개로 나눴을 떄 갯수로 구해야하는?



    return (
        <div className="Photos">
            {/*<div className="fixed-center" style={{backgroundColor: 'yellow'}}>Scroll position: {scrollY}px</div>*/}

            {
                _.map(_photos, (group, i) => <PhotoGroup
                    key={i}
                    group={group}
                    dispatch={dispatch}

                />)
            }
            {
                _.keys(selectedPhoto).length > 0 &&
                <PhotoDetail photo={selectedPhoto}
                             onClose={() => {
                                 dispatch(Action.Creators.updateState({selectedPhoto: {}}))
                             }}
                />
            }
        </div>
    )
}

function PhotoGroup(props) {
    const {
        dispatch,
        group,
    } = props;
    return (
        <div className="photo-col">
            {
                _.map(group, (photo, i) => <PhotoCard
                    key={i}
                    photo={photo}
                    showDetail={() => dispatch(Action.Creators.updateState({selectedPhoto: photo}))}
                />)
            }
        </div>
    )
}

export default connect(state => ({...state}), (dispatch) => ({dispatch}))(Photos); //(state) => ({...state})
//무조건 바로 스토어로 연결해서 빨대꼽는애 , = 스토어가 가지고잇는 스테이트 값 가져올수잇음
//커넥은 인자로 함수 두개 받음 현재스테이트 알아야하고state, 랜더링해야하니까 dispatch
//connect((state) => {}, (dispatch) => {})()  :: 앞에 함수인자받은애가 리턴을 함수로 하기 애 (연결하려는 컴포넌트).
//photo(여기)는 프랍스에서 받게된당~~
// export default connect((store) => (store.state), (store.dispatch) => {})(Photos);

//foo는 이 photo.js에서만 쓸 커스텀 함수 하고싶을떄 일케쓰면됨
//state안으로 접근안하고 바로 photo랑 병ㄱ렬로 놓게 !! ...으로 state전개해주기
// export default connect((state) => ({state, foo: function foo(){ return 'hi';}}), (dispatch) => ({dispatch}))(Photos);
