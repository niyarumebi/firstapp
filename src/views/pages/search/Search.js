import React, {useState, useEffect} from 'react';
import Photos from "../../components/Photos";
import {connect} from "react-redux";
import NoData from "../../components/NoData";
import Tab from "../../components/Tab";
import {Redirect, Switch} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Users from "./Users";
import Collections from "./Collections";
import {navigate} from "../../../helpers/HistoryHelper";

function Search(props) {

    const {
        searchPhotos = []
    } = props;


    return (
        <div className="Search">

            {/*<Tab></Tab>*/}



            <nav>
                <div className="item" onClick={() => navigate('/search/users')}>Users</div>
                <div className="item" onClick={() => navigate('/search/collections')}>collections</div>
            </nav>
            <Switch>
                <Route path={'/search/users'} component={Users}/>
                <Route path={'/search/collections'} component={Collections}/>
                <Redirect to={'/search/users'}/>
            </Switch>

          <div className="container">

          </div>

        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(Search);
