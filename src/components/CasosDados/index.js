import React, {useState} from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';

import './styles.css'

import iconSick from '../../img/icon-sick.svg'
import iconCalendar from '../../img/icon-calendar.svg'

import opcoes from './opcoes';

export default function CasosDados(){

    const [infected, setInfected] = useState('XX');
    const [dead, setDead] = useState('XX');
    const [date, setDate] = useState('XXXX-XX-XX');
    const [uf, setUf] = useState(' ')

    const handleChange = (event) => {
        console.log(event.target.value)
        setUf(event.target.value)
        if(event.target.value !== ' '){
            axios.get('https://brasil.io/api/dataset/covid19/caso/data', 
                    {params:{is_last: "True", state:event.target.value, place_type:"state"}})
                        .then(value =>{
                            setDate(value.data.results[0].date)
                            setDead(value.data.results[0].deaths)
                            setInfected(value.data.results[0].confirmed)
                        })
        }else {
            setDate('XXXX-XX-XX')
            setDead('XX')
            setInfected('XX')
        }
    };

    return(
        <div>
            <div className="select-container">
                <h2 className="select-text">Estado: </h2>
                <FormControl className="form-control">
                    <Select value={uf} onChange={handleChange} >
                        {opcoes.map(value => {
                            return (<MenuItem value={value.value} key={value.value}>{value.name}</MenuItem>)
                        })}
                    </Select>
                </FormControl>
            </div>
            <div className="dados">
                <div className="infected-dead">
                    <img src={iconSick} className="icon" alt="contaminados"/>
                    <ul>
                        <li><span>{infected}</span> Infectados</li>
                        <li><span>{dead}</span> Mortes</li>
                    </ul>
                </div>
                <div className="update-date">
                    <img src={iconCalendar} className="icon"  alt="calendario"/>
                    <ul>
                        <li>Atualizado em: <span>{date}</span></li>
                    </ul>
                </div>
                <p className="dados-credits">Fonte: Secretarias de Saúde das Unidades Federativas,
                                            dados tratados por Álvaro Justen e colaboradores/Brasil.IO
                </p>
            </div>
        </div>

    );
}