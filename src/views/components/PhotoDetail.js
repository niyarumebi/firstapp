import React, {useState, useEffect} from 'react';
import UserIcon from "./UserIcon";
import PhotoCard from "./PhotoCard";

import * as _ from 'lodash';
import {navigate} from "../../helpers/HistoryHelper";
import {connect} from "react-redux";
import cn from 'classnames';
import Action from "../../redux/action";
import Photos from "./Photos";

function PhotoDetail(props) {

    const {
        photo = {},
        relatedPhotos,
        onClose = () => {
        },
        dispatch,
        likedByUser,
    } = props;

    useEffect(() => {
        dispatch(Action.Creators.fetchRelatedPhotos('note'))
        console.log("@@ relatedPhotos", relatedPhotos);
    }, []);
    {/* 창 esc로 끄는 건 밖에서 window.e 캐치해서 onCLose로 연결해줘야할*/}

    return (

        <div className="PhotoDetail"
             onKeyUp={(e) => {
                 if (e.keyCode === 13) {
                     onClose();
                 }
             }}>
            <div className="bg-wrap">
                <div className="btn-close" onClick={() => onClose()}>
                    <i className="material-icons">cancel</i>
                </div>
                <div className="photo-wrap">
                    <div className="photo-upper clearfix">
                        <div className="left-area">
                            <UserIcon src={photo.user.icon}/>
                            <div className="info-wrap">
                                <div className="user-name"
                                     onClick={() => navigate(`/@${photo.user.username}`)}>{photo.user.username}</div>
                                <div className="user-id">@{photo.user.id}</div>
                            </div>
                        </div>
                        <div className="right-area">
                            <div className={cn('btn-basic', {'like-active': likedByUser})}
                                 onClick={() => {
                                     if(likedByUser){
                                         dispatch(Action.Creators.postUnLikePhoto(photo.id))
                                     } else{
                                         dispatch(Action.Creators.postLikePhoto(photo.id))
                                     }
                                 }}>
                                <i className="material-icons">favorite</i>
                            </div>
                            <div className="btn-basic"><i className="material-icons">add</i>Collect</div>
                            <div className="btn-basic long">Download</div>
                        </div>
                    </div>
                    <div className="main-photo">
                        <img src={photo.urls.regular} alt=""/>
                    </div>
                    <div className="photo-bottom clearfix">
                        <div className="left-area">
                            <i className="material-icons">pets</i>
                            <span className="loc">{photo.user.location}</span>
                        </div>
                        <div className="right-area">
                            <div className="btn-basic"><i className="material-icons">share</i> Share</div>
                            <div className="btn-basic"><i className="material-icons">info</i> Info</div>
                        </div>
                    </div>
                </div>


x                <div className="related-photos-wrap">
                    {/*{*/}
                        {/*_.map(photo.related, (r_photo, i) =>*/}
                            {/*(<PhotoCard key={i} photo={r_photo}/>))*/}
                    {/*}*/}
                    {/*<Photos photos={relatedPhotos}/>*/}
                    {
                        relatedPhotos.length > 0 &&  <Photos photos={relatedPhotos}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(PhotoDetail);
