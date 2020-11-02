import React, { useEffect, useState } from 'react'
import Card from '../Card'
import { Wrapper } from './style'

const API_KEY = 'bab3031dd3ab462fa1ca1dc7107b9eb3'
const CITY = 'mai'
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}`

const WeatherContainer = (props) => {
	const [weather, setWeather] = useState([])

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => {
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
