import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import PageTitle from "../../components/PageTitle";

function CategoryContent(props) {
    const {
        categoryContent = {},
    } = props;


    return (
        <div className="CategoryContent">
            <PageTitle
                title={categoryContent.title}
                msg={categoryContent.description}
            />
            {/*<Photos photos={categoryPhotos}></Photos>*/}
        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(CategoryContent);