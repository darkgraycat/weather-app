import React from 'react'
import './Card.scss'
import './weather-icons.css'
import './weather-icons-wind.css'

const WEATHER_ICONS = {
  'Clear': 'wi wi-sunny',
  'Clouds': 'wi wi-cloudy',
  'Rain': 'wi wi-rain',
  'Snow': 'wi wi-snow',
  'Drizzle': 'wi wi-showers',
  'Fog': 'wi wi-fog',
  'Thunderstorm': 'wi wi-thunderstorm',
  DEFAULT: 'wi wi-day-cloudy'
}

const Card = ({ title, main, weather, wind }) => {

  const { temp, humidity, pressure } = main
  const weatherType = weather[0].main
  const { speed, deg } = wind

  console.log('wind', deg)

  //towards-0-deg

  return (
    <div className='Card'>
      <div className='Card__title'>
        <i className={`wi wi-${WEATHER_ICONS[weatherType]}`} />
        {title}
      </div>
      <div className='Card__description'>

        <div>
          Wind
          <i className={`wi wi-wind towards-${deg}-deg`} />
          Speed: {speed} m\sec
        </div>

        <div><i className='wi wi-thermometer' /> {temp}&deg;C</div>
        <div><i className='wi wi-humidity' /> {humidity}%</div>
        <div><i className='wi wi-barometer' /> {(pressure / 1.333) << 0} mmhg</div>
      </div>
    </div>
  )
}

export default Card

/*




*/