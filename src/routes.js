import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';

import firstpage from './pages/firstpage';
import secondpage from './pages/secondpage';

export default function Routes (){
    return(
        <BrowserRouter>
            <Route path="/" exact component={firstpage}/>
            <Route path="/second/:status" component={secondpage} />
        </BrowserRouter>
    );
}