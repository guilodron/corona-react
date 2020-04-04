import React, { useState, useEffect } from 'react'
import { Area, AreaChart, Tooltip, ResponsiveContainer, XAxis } from 'recharts'
import axios from 'axios'

import './styles.css'

export default function Graph() {

  const [data, setData] = useState([
    {
      name: 'Inicio', uv: 1, pv: 2400, amt: 2400,
    },
    {
      name: '', uv: 2, pv: 4300, amt: 2100,
    },
    {
      name: '', uv: 3, pv: 4300, amt: 2100,
    },
    {
      name: '', uv: 4, pv: 4300, amt: 2100,
    },
    {
      name: '', uv: 5, pv: 4300, amt: 2100,
    },
  ]);

  useEffect(() => {
    axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php",
      { params: { "country": "Brazil" }, headers: { "x-rapidapi-key": "c78f485894msh260257d1e19789dp1fcdcfjsn730585c53c2e" } })
      .then(casos => {
        const cases = casos.data.stat_by_country
        const size = casos.data.stat_by_country.length
        const add = Math.ceil(size / 5)
        setData([{
          name: '', uv: parseInt(cases[0].active_cases), pv: 2400, amt: 2400,
        },
        {
          name: cases[add].record_date.slice(0, 10), uv: parseInt(cases[add].active_cases), pv: 4300, amt: 2100,
        },
        {
          name: ' ', uv: parseInt(cases[add * 2].active_cases.replace(',', '')), pv: 4300, amt: 2100,
        },
        {
          name: ' ', uv: parseInt(cases[add * 3].active_cases.replace(',', '')), pv: 4300, amt: 2100,
        },
        {
          name: 'Hoje', uv: parseInt(cases[size-1].active_cases.replace(',', '')), pv: 4300, amt: 2100,
        },])
      })
  }, [])


  return (    

      <div style={{ width: '100%', height: 210, zIndex: 0, position: 'relative'}}>  
        <h1 className="graph-title">Casos do Covid-19 no Brasil</h1>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10, right: 19, left: 19, bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="black" strokeWidth={3} fill="#E6E6E6" fillOpacity={100} />
          </AreaChart>
        </ResponsiveContainer>
      </div>


  );
}