import React from 'react'

import './styles.css'
import tips from './tips'

export default function PrevencaoTips(){
    return(
        <div className="prevencao-tips">
            {tips.map(dica => {
                return (
                    <div className="prevencao-tip" key={dica.id}>
                        <img src={dica.src} alt={dica.title} className="icon-tip"/>
                        <span className="tip-title">{dica.title}</span>
                        <hr className="prevencao-linha"/>
                        <span className="tip-content">{dica.content}</span>
                    </div>
                );
            })}

        </div>
    );
}