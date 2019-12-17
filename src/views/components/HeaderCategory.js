import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import Action from "../../redux/action";
import {connect} from "react-redux";
import {navigate} from "../../helpers/HistoryHelper";

function HeaderCategory(props) {

    const {
        dispatch
    } = props;

    {/*const bigCategory = [*/}

        {/*{*/}
    //         name: 'wallpapers',
    //         id: '1065976',
        {/*},*/}
        {/*{*/}
            {/*name: 'business & work',*/}
            {/*id: '3348877'*/}
        {/*},*/}
    //     {
    //         name: 'nature',
    //         id: '3330448'
    //     },
    //     {
    //         name: 'people',
    //         id: '3356568'
    //     },
    //     {
    //         name: 'unsplash editorila',
    //         id: '317099'
    //     },
    //     {
    //         name: 'health',
    //         id: '3356594'
    //     },
    //     {
    //         name: 'textues & patterns',
    //         id: '3348877'
    //     },
    //     {
            {/*name: 'nature',*/}
    //         id: '3330448'
    //     },
    //     {
            {/*name: 'people',*/}
    //         id: '3356568'
    //     },
    //     {
            {/*name: 'unsplash editorila',*/}
            {/*id: '317099'*/}
        {/*},*/}
        {/*{*/}
            {/*name: 'health',*/}
    //         id: '3356594'
    //     },
    //     {
            {/*name: 'textues & patterns',*/}
            {/*id: '3348877'*/}
        {/*},*/}
        {/*{*/}
            {/*name: 'nature',*/}
            {/*id: '3330448'*/}
    //     },
    //     {
    //         name: 'people',
    //         id: '3356568'
        {/*},*/}
        {/*{*/}
    //         name: 'unsplash editorila',
    //         id: '317099'
    //     },
    //     {
    //         name: 'health',
    //         id: '3356594'
    //     },
    // ];

    return (
        <div className="HeaderCategory">
            <div className="links">
                <div className="link" onClick={() => {
                    navigate('/random');
                }}>
                    <div className="txt">random</div>
                </div>
                {/*{*/}
                    {/*_.map(bigCategory, (bCate, i) =>*/}
                        {/*<div className="link" key={i} onClick={() => {*/}
                            {/*dispatch(Action.Creators.updateState({selectedCollection: bCate}));*/}
                            {/*navigate('/category');*/}
                        {/*}}>*/}
                            {/*<div className="txt">{bCate.name}</div>*/}
                        {/*</div>*/}
                    {/*)*/}
                {/*}*/}
            </div>
        </div>
    )
}

// export default HeaderCategory;
export default connect(state => ({...state}), dispatch => ({dispatch}))(HeaderCategory);