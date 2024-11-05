import React, { useEffect, useState } from 'react'
import Card from './Card.jsx'

import './CardContainer.scss'

const CardContainer = ({ citiesNames }) => {

  const [cities, setCities] = useState({})

  const fetchCity = city => {
    const appid = '686143eef86b19c73062057b087e8085'
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`
    fetch(URL)
      .then(r => r.json())
      .then(d => {
        setCities(prev => {
          return { ...prev, [d.name]: d }
        })
      })
  }

  useEffect(() => {
    citiesNames.map(city => fetchCity(city))
  }, [])

  return (
    <div className='CardContainer'>
      {citiesNames.map(city =>
        cities[city]
          ? <Card
            name={cities[city].name}
            main={cities[city].main}
            weather={cities[city].weather}
            visibility={cities[city].visibility}
            wind={cities[city].wind} />
          : <div className='spinner' />
      )}
    </div>
  )
}

export default CardContainer
