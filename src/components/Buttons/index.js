import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default function Buttons(){
    return(
        <div className="buttons-container">
            <span>CONFIRA ALGUMAS DICAS PARA PREVENÇÃO</span>
            <Link><span>PREVENÇÃO</span></Link>
            <span>BUSQUE INFORMAÇÕES SOBRE SUA REGIÃO</span>
            <Link><span>CASOS</span></Link>
            <span>DESCUBRA EVENTOS PARA APROVEITAR DURANTE A QUARENTENA</span>
            <Link><span>EVENTOS</span></Link>
        </div>
    );
}