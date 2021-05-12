import React from 'react'
import './weather-icons.css'

const WeatherIcon = ({ type }) => {
  return (
    <i className={`wi wi-${type}`}></i>
  )
}

export default WeatherIcon