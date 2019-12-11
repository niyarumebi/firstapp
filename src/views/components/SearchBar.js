import React, {useState, useEffect} from 'react';
import FetchHelper from "../../helpers/FetchHelper";
import Action from "../../redux/action";
import {connect} from "react-redux";

function SearchBar(props) {

    const {
        placeholder = 'Search free high-resolution photos',
        dispatch,
    } = props;

    const [value, setValue] = useState('');
    return (
        <div className="SearchBar">
            <i className="material-icons"
            onClick={() => {
                dispatch(Action.Creators.fetchSearchResult(value));
            }}>search</i>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                        dispatch(Action.Creators.fetchSearchResult(value));
                    }
                }}
            />
        </div>
    )
}

export default connect((state => ({...state})), (dispatch => ({dispatch})))(SearchBar);