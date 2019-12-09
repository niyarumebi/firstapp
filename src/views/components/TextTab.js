import React, {useState, useEffect} from 'react';

function TextTab(props) {

    const {} = props;

    return (
        <div className="TextTab comp-tab">

            <div className="head-wrap">
                <div className="tab-head is-active">
                    <div className="txt">Likes</div>
                </div>
                <div className="tab-head">
                    <div className="txt">asdf</div>
                </div>
                <div className="tab-head">
                    <div className="txt">asdfasf</div>
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

export default TextTab;