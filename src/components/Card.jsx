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
  PRESSURE: 'wi wi-barometer',
  TEMP_FEELS: 'wi wi-thermometer-exterior',
  GROUND_LEVEL: 'wi wi-earthquake',
  SEA_LEVEL: 'wi wi-flood',
  VISIBILITY: 'wi wi-moon-alt-waxing-crescent-4',
}

const Card = ({ name, main, weather, wind, visibility }) => {
  const { temp, humidity, pressure, feels_like, grnd_level, sea_level } = main
  const weatherType = weather[0].main
  const { speed } = wind

  const calcBackgroundColor = () => {
    const MAX_COLOR = 255
    const r = (Math.random() * MAX_COLOR) << 0
    const g = (Math.random() * MAX_COLOR) << 0
    const b = (Math.random() * MAX_COLOR) << 0
    return `rgba(${r}, ${g}, ${b}, 0.2)`
  }

  const wikipediaLink = 'https://en.wikipedia.org/wiki/' + name;

  return (
    <div className='Card' style={{
      backgroundColor: calcBackgroundColor()
    }}>
      <div className='Card__title'>
        <a href={wikipediaLink}>
          <span>{name}</span>
        </a>
        <i className={WEATHER_ICONS[weatherType] || WEATHER_ICONS.DEFAULT} />
      </div>
      <div className='Card__description'>
        <div title="Temperature">   <i className={GUI_ICONS.TEMP} />         {temp | 0}&deg;C</div>
        <div title="Feels like">    <i className={GUI_ICONS.TEMP_FEELS} />   {feels_like | 0}&deg;C</div>
        <div title="Wind">          <i className={GUI_ICONS.WIND} />         {speed} m\s</div>
        <div title="Humidity">      <i className={GUI_ICONS.HUMIDITY} />     {humidity | 0}%</div>
        <div title="Pressure">      <i className={GUI_ICONS.PRESSURE} />     {(pressure / 1.333) | 0}mm</div>
        <div title="Visibility">    <i className={GUI_ICONS.VISIBILITY} />   {(visibility / 100) | 0}%</div>
        <div title="Ground level">  <i className={GUI_ICONS.GROUND_LEVEL} /> {grnd_level | 0}m</div>
        <div title="Sea level">     <i className={GUI_ICONS.SEA_LEVEL} />    {sea_level | 0}m</div>
      </div>
    </div>
  )
}

export default Card
