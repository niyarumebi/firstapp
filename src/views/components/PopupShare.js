import React, {useState, useEffect} from 'react';
import cn from "classnames";
import {connect} from "react-redux";

function PopupShare(props) {
    const {
        dispatch,
        collectionById,
        // selectedPhoto,
    } = props;
    const [openShare, setOpenShare] = useState(true);

    console.log("@@ collectionById", collectionById);

    return (
        <>
            {
                openShare &&
                <div className="PopupShare">
                    <div className="btn-close" onClick={(e) => {
                        e.stopPropagation();
                        setOpenShare(false);
                    }}>
                        <i className="material-icons">cancel</i>
                    </div>
                    <div className="title">Share</div>
                    <div className="sub">CollectionPhotos by {collectionById.user.username}</div>

                    < div className="link-wrap text-ellipsis">
                        {/*{collectionById.links.html}*/}
                        <div className="btn-basic">Copy link</div>
                    </div>
                </div>
            }
        </>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(PopupShare);