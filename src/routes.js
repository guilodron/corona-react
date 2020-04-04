import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from './components/pages/MainPage'
import CasosPage from './components/pages/CasosPage'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact> <MainPage /> </Route>
                <Route path="/casos"> <CasosPage /> </Route>
            </Switch>
        </BrowserRouter>
    );
}