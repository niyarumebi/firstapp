import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
<<<<<<< HEAD
=======
import NoData from "../../components/NoData";
>>>>>>> play
import SearchTab from "../../components/SearchTab";

function Search(props) {

    const {
    } = props;

    return (
        <div className="Search">
<<<<<<< HEAD
            <SearchTab></SearchTab>
=======

            <SearchTab></SearchTab>

>>>>>>> play
        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(Search);
