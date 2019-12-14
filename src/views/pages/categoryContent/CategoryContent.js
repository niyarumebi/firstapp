import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import PageTitle from "../../components/PageTitle";
import Action from "../../../redux/action";
import UserIcon from "../../components/UserIcon";

function CategoryContent(props) {
    const {
        dispatch,
        selectedCollection = {},
        collectionPhotos = [],
        test = '',
    } = props;

    useEffect(() => {
        dispatch(Action.Creators.fetchCollectionPhotos(test))
    }, []);

    return (
        <div className="CategoryContent">
            <PageTitle
                // title={selectedCollection.title}
                // msg={selectedCollection.description}
            >
                <UserIcon
                // src={selectedCollection.user.profile_image.small}
                // name={selectedCollection.user.name}
                ></UserIcon>
            </PageTitle>
            {test}
        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(CategoryContent);