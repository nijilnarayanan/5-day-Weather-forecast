import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'
import WeatherContainer from './index'
import dataFixture from './weather_state.fixture'

const dummyState = {
	loading: false,
	data: dataFixture,
	error: '',
}

test('Run Test <WeatherContainer />', async () => {
	const container = document.createElement('div')

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
