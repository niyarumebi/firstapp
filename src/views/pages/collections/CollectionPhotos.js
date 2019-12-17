import React, {useState, useEffect} from 'react';
import PageTitle from "../../components/PageTitle";
import {connect} from "react-redux";
import Action from "../../../redux/action";
import Photos from "../../components/Photos";
import UserIcon from "../../components/UserIcon";
import cn from 'classnames'

function CollectionPhotos(props) {

    const {
        dispatch,
        selectedCollection = {
            id: '',
        },
        collectionPhotos = []
    } = props;


    console.log("@@ props.match.params.id", props.match.params.id);
    console.log("@@ props.match.params.title", props.match.params.title);

    useEffect(() => {
        dispatch(Action.Creators.fetchCollectionPhotos(selectedCollection.id));
    }, []);
    

    return (
        <div className="CollectionPhotos">
            {props.match.params.id}
            <div className="page-header">
                <div className="bg"
                     style={{backgroundImage: `url(${selectedCollection.cover_photo.urls.regular})`}}/>
                <PageTitle  title={selectedCollection.title} msg={selectedCollection.description}>
                    <div className="user-wrap">
                        <UserIcon
                            src={selectedCollection.user.profile_image.small}
                            name={selectedCollection.user.username}
                        />
                        <div className="btn-basic btn-type btn-share">
                            <i className="material-icons">reply</i> Share
                        </div>
                    </div>



                </PageTitle>
            </div>

            <div className="container">
                <div className="count-info">
                    {selectedCollection.total_photos} photos
                </div>

                <Photos photos={collectionPhotos}></Photos>
            </div>


        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(CollectionPhotos);