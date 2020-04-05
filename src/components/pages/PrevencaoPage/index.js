import React from 'react'
import Header from '../../Header'
import PrevencaoText from '../../PrevencaoText'
import PrevencaoTips from '../../PrevencaoTips'

import './styles.css'

export default function PrevencaoPage(){
    return(
        <div>
            <Header />
            <PrevencaoText />
            <PrevencaoTips />
        </div>
    );
}