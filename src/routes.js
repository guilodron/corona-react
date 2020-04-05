import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from './components/pages/MainPage'
import CasosPage from './components/pages/CasosPage'
import EventosPage from './components/pages/EventosPage';
import PrevencaoPage from './components/pages/PrevencaoPage';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact> <MainPage /> </Route>
                <Route path="/casos"> <CasosPage /> </Route>
                <Route path="/eventos"> <EventosPage /> </Route>
                <Route path="/prevencao"> <PrevencaoPage/> </Route>
            </Switch>
        </BrowserRouter>
    );
}