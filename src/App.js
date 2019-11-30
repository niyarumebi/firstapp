import React from 'react';
import Home from "./views/pages/home/Home";
import Header from "./views/components/Header";
import Search from "./views/pages/search/Search";
import {Route} from "react-router-dom";
import Login from "./views/components/Login";
import Category from "./views/components/Category";
import Join from "./views/components/Join";

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

            <Route path={`/login`} component={Login}/>
            <Route exact path={`/`} component={Home}/>
            <Route path={`/category/1`} component={Category}/>
            <Route path={`/search`} component={Search}/>
            <Route path={`/join`} component={Join}/>


        </div>
    );
}

export default App;
