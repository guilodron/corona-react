import React from 'react';


import './styles.css'

import Header from '../../Header';
import CasosText from '../../CasosText';
import CasosDados from '../../CasosDados';

 
export default function CasosPage(){

    return(
        <div>
            <Header />
            <CasosText />
            <CasosDados />
        </div>
    );
}