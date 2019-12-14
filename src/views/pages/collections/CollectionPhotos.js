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


    

    useEffect(() => {
        dispatch(Action.Creators.fetchCollectionPhotos(selectedCollection.id));
    }, []);
    
    const [openShare, setOpenShare] = useState(false);

    return (
        <div className="CollectionPhotos">
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

                    <div className={cn("share-popup", {'is-active': openShare})} onClick={() => setOpenShare(true)}>
                        <div className="btn-close" onClick={(e) => {
                            e.stopPropagation();
                            setOpenShare(false);}}>
                            <i className="material-icons">cancel</i>
                        </div>
                        <div className="title">Share</div>
                        <div className="sub">CollectionPhotos by {selectedCollection.user.username}</div>

                        <div className="link-wrap text-ellipsis">
                            {selectedCollection.links.html}
                            <div className="btn-basic">Copy link</div>
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