import { weatherRequest, weatherSuccess, weatherFailure } from './action'
import getWeatherData from './api_call'

const fetchWeatherDetails = () => {
	return (dispatch) => {
		// Loading State
		dispatch(weatherRequest())

		getWeatherData()
			.then((response) => {
				// Success State
				const fiveDayData = response.data?.list.filter((reading) => reading.dt_txt.includes('18:00:00')) || []
				dispatch(weatherSuccess(fiveDayData))
			})
			.catch((err) => {
				// Failure State
				const errorMessage = err.response.data?.message
				/* istanbul ignore next */
				dispatch(weatherFailure(errorMessage))
			})
	}
}

export default fetchWeatherDetails
