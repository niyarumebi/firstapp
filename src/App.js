import React from 'react';
import Home from "./views/pages/home/Home";
import Header from "./views/components/Header";
import Search from "./views/pages/search/Search";
import {Route} from "react-router-dom";
import Login from "./views/components/Login";
import Category from "./views/components/Category";
import Join from "./views/components/Join";

import Collections from "./views/pages/collections/Collections";
import Footer from "./views/components/Footer";
import RandomPhotos from "./views/pages/randomPhotos/RandomPhotos";

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
            <Route path={'/collections'} component={Collections}/>
            <Route path={'/category/:value'} component={Category}/>
            <Route path={'/search'} component={Search}/>

            <Footer/>

        </div>
    );
}

export default App;
