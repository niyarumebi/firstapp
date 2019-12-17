import React from 'react';
import Home from "./views/pages/home/Home";
import Header from "./views/components/Header";
import Search from "./views/pages/search/Search";
import {Route} from "react-router-dom";
import Login from "./views/components/Login";
import CategoryContent from "./views/pages/categoryContent/CategoryContent";
import Join from "./views/components/Join";

import Collections from "./views/pages/collections/Collections";
import Footer from "./views/components/Footer";
import RandomPhotos from "./views/pages/randomPhotos/RandomPhotos";
import CollectionPhotos from "./views/pages/collections/CollectionPhotos";

function App() {

    return (
        <div className="App">
            {/*{Header({*/}
            {/*today: 111,*/}
                {/*yes:222*/}
            {/*}*/}
            {/*)}*/}
            {/*<Header today={111} yes={222}/>*/}
            <Header/>

            <Route exact path={'/'} component={Home}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/join'} component={Join}/>

            <Route path={'/random'} component={RandomPhotos}/>
            <Route path={'/category'} component={CategoryContent}/>
            {/*<Route path={'/category'}*/}
            {/*render={(props = { test: '209138'}) => <CategoryContent {...props}/>}*/}
            {/*/>*/}
            <Route path={'/collections'} component={Collections}/>
            <Route path={'/collections/:id/photos/'} component={CollectionPhotos}/>
            <Route path={'/search'} component={Search}/>

            <Footer/>

        </div>
    );
}

export default App;
