import React, {useState, useEffect} from 'react';

function IconTab(props) {

    const {} = props;

    return (
        <div className="IconTab comp-tab">

            <div className="head-wrap">
                <div className="tab-head is-active">
                    <div className="txt">
                        <i className="material-icons">insert_photo</i>
                        Likes 7
                    </div>
                </div>
                <div className="tab-head">
                    <div className="txt">
                        <i className="material-icons">insert_photo</i>
                        Likes 7
                    </div>
                </div>
                <div className="tab-head">
                    <div className="txt">
                        <i className="material-icons">insert_photo</i>
                        Likes 7
                    </div>
                </div>
            </div>

            <div className="body-wrap">
                <div className="tab-body">body1</div>
                <div className="tab-body">body2</div>
                <div className="tab-body">body3</div>
            </div>
        </div>
    )
}

export default IconTab;