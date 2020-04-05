import React from 'react'

import Header from '../../Header'
import EventosText from '../../EventosText'
import EventosEvents from '../../EventosEvents'


import './styles.css'

export default function EventosPage(){
    return(
        <div>
            <Header />
            <EventosText />
            <EventosEvents />
        </div>
        

    );
}