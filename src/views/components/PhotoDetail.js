import React, {useState, useEffect} from 'react';
import UserIcon from "./UserIcon";
import PhotoCard from "./PhotoCard";

import * as _ from 'lodash';

function PhotoDetail(props) {

    const {
        photo = {},
        onClose = () => {},
    } = props;


    return (
        <div className="PhotoDetail">
            <div className="bg-wrap">
                <div className="btn-close" onClick={() => onClose()}>
                    <i className="material-icons">cancel</i>
                </div>
                <div className="photo-wrap">
                    <div className="photo-upper clearfix">
                        <div className="left-area">
                            <UserIcon src={photo.user.icon}/>
                            <div className="info-wrap">
                                <div className="user-name">Patekf djfa</div>
                                <div className="user-id">@patekf_djfa</div>
                            </div>
                        </div>
                        <div className="right-area">
                            <div className="btn-basic"><i className="material-icons">favorite</i></div>
                            <div className="btn-basic"><i className="material-icons">add</i>Collect</div>
                            <div className="btn-basic long">Download</div>
                        </div>
                    </div>
                    <div className="main-photo">
                        <img src={photo.imageUrl} alt=""/>
                    </div>
                    <div className="photo-bottom clearfix">
                        <div className="left-area">
                            <i className="material-icons">pets</i>
                            <span className="loc">Grindelwald, Suiza</span>
                        </div>
                        <div className="right-area">
                            <div className="btn-basic"><i className="material-icons">share</i> Share</div>
                            <div className="btn-basic"><i className="material-icons">info</i> Info</div>
                        </div>
                    </div>
                </div>


                <div className="related-photos-wrap">
                    {
                        _.map(photo.related, (r_photo, i) =>
                            (<PhotoCard key={i} photo={r_photo}/>))
                    }
                </div>
            </div>
        </div>
    )
}

export default PhotoDetail;