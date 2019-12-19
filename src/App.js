import React, {useEffect} from 'react';
import {Route, withRouter, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Action from "./redux/action";
import Home from "./views/pages/home/Home";
import Header from "./views/components/Header";
import NotFound from "./views/pages/NotFound";
import Search from "./views/pages/search/Search";

import Login from "./views/components/Login";
import CategoryContent from "./views/pages/categoryContent/CategoryContent";
import Join from "./views/components/Join";
import Collections from "./views/pages/collections/Collections";
import Footer from "./views/components/Footer";
import RandomPhotos from "./views/pages/randomPhotos/RandomPhotos";
import CollectionPhotos from "./views/pages/collections/CollectionPhotos";
import PopupShare from "./views/components/PopupShare";
import Toast from "./views/components/Toast";
import cn from "classnames";
import PreLoader from "./views/components/PreLoader";

function App(props) {

    const {
        dispatch,
        toastMessage,
        location,
    } = props;

    useEffect(() => {
       dispatch(Action.Creators.updateState({
           // toastMessage: '',
           currentPath: location.pathname,
       }))
    }, [location.pathname]);

    return (
        <div className="App">

            {/*<PreLoader/>*/}
            <Header currentPath={location.pathname}/>

            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/join'} component={Join}/>

                <Route path={'/random'} component={RandomPhotos}/>
                <Route path={'/category'} component={CategoryContent}/>
                {/*<Route path={'/category'}*/}
                {/*render={(props = { test: '209138'}) => <CategoryContent {...props}/>}*/}
                {/*/>*/}


                {/*<Route path={'/collections/:id/:title/share'} component={PopupShare}/>*/}
                <Route path={'/collections/:id/:title/'} component={CollectionPhotos}/>
                <Route path={'/collections'} component={Collections}/>


                <Route path={'/search/:type/:query'} component={Search}/>
                <Route path={'/404'} component={NotFound}/>
                <Redirect to={'/404'}/>
            </Switch>

            <Footer/>
            {
                toastMessage &&
                <Toast message={toastMessage}/>
            }
        </div>
    );
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(withRouter(App));