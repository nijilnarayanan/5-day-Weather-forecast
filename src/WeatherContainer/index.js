import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../Card'
import { Wrapper, Messages } from './style'
import fetchWeatherDetails from './../Redux/actionCreator'

const WeatherContainer = () => {
	const { loading, weather, error } = useSelector((state) => ({
		weather: state.data,
		loading: state.loading,
		error: state.error,
	}))
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchWeatherDetails())
	}, [dispatch])

	const renderWeather = () => {
		if (loading) {
			return <Messages>Loading ...</Messages>
		}

		if (error) {
			return <Messages>{error}</Messages>
		}

		return (
			<Wrapper>
				{weather && weather.map((weatherData, index) => <Card weatherData={weatherData} key={index} />)}
			</Wrapper>
		)
	}

	return <Fragment>{renderWeather()}</Fragment>
}

export default WeatherContainer
