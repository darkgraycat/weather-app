import React from 'react'
import './Card.scss'
import WeatherIcon from './WeatherIcon.jsx'

const Card = ({ title, weather }) => {

  const { temp, feels_like, humidity, pressure } = weather

  return (
    <div className='Card'>
      <div className='Card__title'>{title}</div>
      <div className='Card__description'>
        <div><WeatherIcon type='thermometer' />{temp}&deg;C feels: {feels_like}&deg;C</div>
        <div><WeatherIcon type='humidity' />{humidity}%</div>
        <div><WeatherIcon type='barometer' />{(pressure / 1.333) << 0} mmhg</div>
        <WeatherIcon type='sunrise' />
      </div>
    </div>
  )
}

export default Card