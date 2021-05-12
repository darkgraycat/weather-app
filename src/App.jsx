import React, { useEffect, useState } from 'react'
import Card from './components/Card.jsx'

import './App.scss';

const App = () => {

  const city = 'Mariupol'
  const key = '686143eef86b19c73062057b087e8085'
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=ua`

  const [isReady, setIsReady] = useState(false)
  const [response, setResponse] = useState({})

  useEffect(() => {

    fetch(URL)
      .then(r => r.json())
      .then(d => {
        setResponse(d)
        setIsReady(true)
      })

  }, [])

  return (
    <div className="App">

      {
        isReady
          ? <Card title={response.name} main={response.main} weather={response.weather} wind={response.wind} />
          : <div className='spinner'></div>
      }

    </div>
  )
}

export default App;


