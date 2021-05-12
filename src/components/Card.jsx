import React from 'react'
import './Card.scss'
import './weather-icons.css'

const WEATHER_ICONS = {
  'Clear': 'wi wi-day-sunny',
  'Clouds': 'wi wi-cloudy',
  'Rain': 'wi wi-rain',
  'Snow': 'wi wi-snow',
  'Drizzle': 'wi wi-showers',
  'Fog': 'wi wi-fog',
  'Thunderstorm': 'wi wi-thunderstorm',
  DEFAULT: 'wi wi-day-cloudy'
}

const GUI_ICONS = {
  TEMP: 'wi wi-thermometer',
  WIND: 'wi wi-strong-wind',
  HUMIDITY: 'wi wi-humidity',
  PRESSURE: 'wi wi-barometer'
}

const Card = ({ name, main, weather, wind }) => {

  console.log(name, main, weather, wind)


  const { temp, humidity, pressure } = main
  const weatherType = weather[0].main
  const { speed } = wind

  const calcBackgroundColor = () => {
    const MAX_COLOR = 255
    const r = (Math.random() * MAX_COLOR) << 0
    const g = (Math.random() * MAX_COLOR) << 0
    const b = (Math.random() * MAX_COLOR) << 0
    return `rgba(${r}, ${g}, ${b}, 0.2)`
  }

  return (
    <div className='Card' style={{
      backgroundColor: calcBackgroundColor()
    }}>
      <div className='Card__title'>
        <span>{name}</span>
        <i className={WEATHER_ICONS[weatherType] || WEATHER_ICONS.DEFAULT} />
      </div>
      <div className='Card__description'>
        <div><i className={GUI_ICONS.WIND} />{speed} m\s</div>
        <div><i className={GUI_ICONS.TEMP} /> {temp << 0}&deg;C</div>
        <div><i className={GUI_ICONS.HUMIDITY} /> {humidity << 0}%</div>
        <div><i className={GUI_ICONS.PRESSURE} /> {(pressure / 1.333) << 0}mm</div>
      </div>
    </div>
  )
}

export default Card