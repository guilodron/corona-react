import React, {useState} from 'react';
import logo from '../../img/logo-hands.svg'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import './styles.css'

export default function Header(){

    const [show, setShow] = useState(true)

    const toggle = () => {
        setShow(!show);
    }

    return(
        <header >
            <div className="header-container">
                <FaBars className="fa-bars" onClick={toggle}/>
                <Link className="logo" to="/"><img src={logo} alt="FicaEmCasa"/></Link>
            </div>

            <nav className="menu-container" style={{ height: `${show?"0":"48px"}`, opacity: `${show?"0":"1"}`}}>
                
                <ul className="itens">
                    <li><Link to="/casos">Casos</Link></li>
                    <li><Link to="/">Eventos</Link></li>
                    <li><Link to="/">Prevenção</Link></li>
                </ul>
            </nav>
            
        </header>
    );
}