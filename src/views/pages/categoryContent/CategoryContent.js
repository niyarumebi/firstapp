import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import PageTitle from "../../components/PageTitle";

function CategoryContent(props) {
    const {
        collections = {},
    } = props;


    return (
        <div className="CategoryContent">
            <PageTitle
                title={collections.title}
                msg={collections.description}
            />
        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(CategoryContent);