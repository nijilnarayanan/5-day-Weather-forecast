import getWeatherData from './api_call'
import dataFixture from '../WeatherContainer/api_call.fixture'

import fetchWeatherDetails from './actionCreator'

jest.mock('./api_call')

test('Test fetchWeatherDetails success', () => {
	getWeatherData.mockResolvedValueOnce({ data: dataFixture })
	const dispatch = jest.fn()
	fetchWeatherDetails()(dispatch)
})

test('Test fetchWeatherDetails error', () => {
	getWeatherData.mockRejectedValueOnce({ data: { message: 'Error Occurred' } })
	const dispatch = jest.fn()
	fetchWeatherDetails()(dispatch)
})
