import React, { useEffect, useState } from 'react'
import Card from '../Card'
import { Wrapper } from './style'
import fetchWeatherData from './api_call'

const WeatherContainer = () => {
	const [weather, setWeather] = useState([])

	useEffect(() => {
		fetchWeatherData().then((data) => {
			const fiveDayData = data.list.filter((reading) => reading.dt_txt.includes('18:00:00'))
			setWeather(fiveDayData)
		})
	}, [])

	return (
		<Wrapper>
			{weather && weather.map((weatherData, index) => <Card weatherData={weatherData} key={index} />)}
		</Wrapper>
	)
}

export default WeatherContainer
