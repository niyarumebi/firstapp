import React, {useEffect} from 'react';
import Home from "./views/pages/home/Home";
import Header from "./views/components/Header";
import Search from "./views/pages/search/Search";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Login from "./views/components/Login";
import CategoryContent from "./views/pages/categoryContent/CategoryContent";
import Join from "./views/components/Join";

import Collections from "./views/pages/collections/Collections";
import Footer from "./views/components/Footer";
import RandomPhotos from "./views/pages/randomPhotos/RandomPhotos";
import CollectionPhotos from "./views/pages/collections/CollectionPhotos";
import SharePopup from "./views/components/SharePopup";
import Toast from "./views/components/Toast";
import {connect} from "react-redux";
import Action from "./redux/action";
import NotFound from "./views/pages/NotFound";

function App(props) {

    const {
        dispatch,
        showSharePopup,
        toastMessage,
        location,
    } = props;

    console.log("@@ props  in app", props);

    useEffect(() => {
        dispatch(Action.Creators.updateState({
            toastMessage: '',
            currentPath: location.pathname
        }));

    }, [location.pathname]);

    return (
        <div className="App">
            {/*{Header({*/}
            {/*today: 111,*/}
                {/*yes:222*/}
            {/*}*/}
            {/*)}*/}
            {/*<Header today={111} yes={222}/>*/}
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

                <Route path={'/collections/:id/:name'} component={CollectionPhotos}/>

                <Route path={'/collections'} component={Collections}/>
                <Route path={'/collections/share'} component={SharePopup}/>

                <Route path={'/search'} component={Search}/>
                <Route path={'/404'} component={NotFound}/>

                <Redirect to={'/404'}/>
            </Switch>

            <Footer/>






            {
                showSharePopup &&
                <SharePopup/>
            }


            {
                toastMessage &&
                <Toast message={toastMessage}/>
            }






        </div>
    );
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(withRouter(App));
