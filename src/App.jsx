import React, { useEffect, useState } from 'react'
import CardContainer from './components/CardContainer.jsx'

import './App.scss';

const App = () => {

  const citiesNames = [
    'Kyiv',
    'Kharkiv',
    'Odesa',
    'Dnipro',
    'Donetsk',
    'Zaporizhzhia',
    'Lviv',
    'Kryvyi Rih',
    'Mykolaiv',
    'Mariupol',
    'Ivano-Frankivsk',
    'Luhansk',
    'Vinnytsia',
    'Simferopol',
    'Chernihiv',
    'Poltava',
  ]

  return (
    <div className="App">

      <div className="animated-bg"></div>

      <h1>React weather forecast</h1>

      <CardContainer citiesNames={citiesNames} />

    </div>
  )
}

export default App;


