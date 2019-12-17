import React, {useState, useEffect} from 'react';
import cn from "classnames";
import {connect} from "react-redux";

function PopupShare(props) {

    const {
        dispatch,
        selectedCollection = {},
        selectedPhoto = {},
    } = props;
    const [openShare, setOpenShare] = useState(false);

    return (
        <div className={cn("PopupShare", {'is-active': selectedPhoto.id || selectedCollection.id})}>
            <div className="btn-close" onClick={(e) => {
                e.stopPropagation();
                setOpenShare(false);
            }}>
                <i className="material-icons">cancel</i>
            </div>
            <div className="title">Share</div>
            {
                selectedPhoto &&
                <>
                    <div className="sub">CollectionPhotos by {selectedCollection.user.username}</div>

                    <div className="link-wrap text-ellipsis">
                        {selectedCollection.links.html}
                        <div className="btn-basic">Copy link</div>
                    </div>
                </>
            }
            {
                selectedCollection &&
                <>
                    <div className="sub">CollectionPhotos by {selectedCollection.user.username}</div>

                    < div className="link-wrap text-ellipsis">
                        {selectedCollection.links.html}
                        <div className="btn-basic">Copy link</div>
                    </div>
                </>
            }
        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(PopupShare);