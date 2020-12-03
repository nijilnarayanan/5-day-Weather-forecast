import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'
import WeatherContainer from './index'
import fetchWeatherData from './api_call'
import dataFixture from './api_call.fixture'

const dummyState = {
	loading: false,
	data: [],
	error: '',
}

jest.mock('./api_call')

test('Run Test <WeatherContainer />', async () => {
	const container = document.createElement('div')
	fetchWeatherData.mockResolvedValue(dataFixture)
	await act(async () => {
		ReactDOM.render(
			<Provider store={{ getState: () => dummyState, dispatch: () => {}, subscribe: () => {} }}>
				<WeatherContainer />
			</Provider>,
			container,
		)
	})
	expect(pretty(container.innerHTML)).toMatchSnapshot()
})
