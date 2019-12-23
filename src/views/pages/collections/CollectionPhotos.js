import React, {useState, useEffect} from 'react';
import PageTitle from "../../components/PageTitle";
import {connect} from "react-redux";
import Action from "../../../redux/action";
import Photos from "../../components/Photos";
import UserIcon from "../../components/UserIcon";
import cn from 'classnames'
import {navigate} from "../../../helpers/HistoryHelper";
import {makeADash} from "../../../helpers/CommonHelper";

function CollectionPhotos(props) {

    const {
        dispatch,
        showSharePopup,
        collectionById,
        collectionPhotos,
    } = props;


    const id = props.match.params.id;

    useEffect(() => {
        // dispatch(Action.Creators.updateS tate({collectionById : null, collectionPhotos: null}));
        dispatch(Action.Creators.fetchCollectionById(id));
        dispatch(Action.Creators.fetchCollectionPhotos(id));
    }, [id]);
    
    if(!collectionById){
        return false;
    }

    return (
        <div className="CollectionPhotos">
            <div className="page-header">
                <div className="bg"
                     style={{backgroundImage: `url(${collectionById.cover_photo.urls.regular})`}}/>
                <PageTitle  title={collectionById.title} msg={collectionById.description}>
                    <div className="user-wrap">
                        <UserIcon
                            src={collectionById.user.profile_image.small}
                            name={collectionById.user.username}
                        />
                        <div className="btn-basic btn-type btn-share" onClick={() => {
                            // navigate(`/collections/${id}/${makeADash(collectionById.title)}/share`)
                            dispatch(Action.Creators.updateState({showSharePopup:true}))
                        }}>
                            <i className="material-icons">reply</i> Share
                        </div>
                    </div>
                </PageTitle>
            </div>

            <div className="container">
                <div className="count-info">
                    {collectionById.total_photos} photos
                </div>

                <Photos photos={collectionPhotos}></Photos>
            </div>


        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(CollectionPhotos);