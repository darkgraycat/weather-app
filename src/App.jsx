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

      <div className="author">
        by dark<span style={{ color: '#bbb4' }}>gray</span>cat
        <a href="https://t.me/darkgraycat">telegram</a>
        <a href="https://github.com/darkgraycat">github</a>
      </div>

      <div className="animated-bg"></div>

      <h1>React weather forecast</h1>

      <CardContainer citiesNames={citiesNames} />


    </div>
  )
}

export default App;


