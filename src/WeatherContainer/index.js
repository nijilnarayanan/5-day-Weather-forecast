import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../Card'
import { Wrapper } from './style'
import fetchWeatherDetails from './../Redux/actionCreator'

const WeatherContainer = () => {
	const data = useSelector((state) => state.data)

	const dispatch = useDispatch()
	const [weather, setWeather] = useState([])

	useEffect(() => {
		dispatch(fetchWeatherDetails())
	}, [])

	return (
		<Wrapper>
			{weather && weather.map((weatherData, index) => <Card weatherData={weatherData} key={index} />)}
		</Wrapper>
	)
}

export default WeatherContainer
