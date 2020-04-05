import React from 'react'

import './styles.css'

export default function PrevencaoText(){
    return(
        <div className="prevencao-text-container">
            <h1 className="prevencao-title">Prevenção</h1>
            <hr className="prevencao-linha"/>
            <p className="prevencao-about">Para evitar a 
                contaminação, confira algumas dicas para se 
                prevenir contra o vírus!</p>
        </div>
    );
}