import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default function Buttons(){
    return(
        <div className="buttons-container">
            <span>CONFIRA ALGUMAS DICAS PARA PREVENÇÃO</span>
            <Link to="/"><span>PREVENÇÃO</span></Link>
            <span>BUSQUE INFORMAÇÕES SOBRE SUA REGIÃO</span>
            <Link to="/casos"><span>CASOS</span></Link>
            <span>DESCUBRA EVENTOS PARA APROVEITAR DURANTE A QUARENTENA</span>
            <Link to="/eventos"><span>EVENTOS</span></Link>
        </div>
    );
}