import React from 'react';

import Header from '../../Header';
import Graph from '../../Graph';
import Separator from '../../Separator';
import About from '../../About';
import Buttons from '../../Buttons';

export default function MainPage(){
    return (
        <div>

            <Header />
            <Graph />
            <Separator/>
            <About />
            <Buttons />
        </div>
    );
}