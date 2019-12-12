import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import Action from "../../redux/action";
import {connect} from "react-redux";

function HeaderCategory(props) {

    const {
        dispatch
    } = props;

    const bigCategory = [
        {
            name: 'random',
            id: '/random'
        },
        {
            name: 'wallpapers',
            id: '1065976',
        },
        {
            name: 'textues & patterns',
            id: '3348877'
        },
        {
            name: 'nature',
            id: '3330448'
        },
        {
            name: 'people',
            id: '3356568'
        },
        {
            name: 'unsplash editorila',
            id: '317099'
        },
        {
            name: 'health',
            id: '3356594'
        },
        {
            name: 'textues & patterns',
            id: '3348877'
        },
        {
            name: 'nature',
            id: '3330448'
        },
        {
            name: 'people',
            id: '3356568'
        },
        {
            name: 'unsplash editorila',
            id: '317099'
        },
        {
            name: 'health',
            id: '3356594'
        },
        {
            name: 'textues & patterns',
            id: '3348877'
        },
        {
            name: 'nature',
            id: '3330448'
        },
        {
            name: 'people',
            id: '3356568'
        },
        {
            name: 'unsplash editorila',
            id: '317099'
        },
        {
            name: 'health',
            id: '3356594'
        },
    ];

    return (
        <div className="HeaderCategory">
            <div className="links">
                {
                    _.map(bigCategory, (bCate, i) =>
                        <div className="link" key={i} onClick={() => dispatch(Action.Creators.fetchCollection(bCate.id))}>
                            <div className="txt">{bCate.name}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

// export default HeaderCategory;
export default connect(state => ({...state}), dispatch => ({dispatch}))(HeaderCategory);