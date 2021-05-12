import React, { useEffect, useState } from 'react'
import CardContainer from './components/CardContainer.jsx'

import './App.scss';

const App = () => {

  const citiesNames = ['Kyiv', 'Lviv', 'Kharkiv', 'Odesa', 'Ivano-Frankivsk', 'Mariupol']

  return (
    <div className="App">

      <h1>React weather forecast</h1>

      <CardContainer citiesNames={citiesNames} />

    </div>
  )
}

export default App;


