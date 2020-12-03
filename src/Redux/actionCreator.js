import axios from 'axios'
import { weatherRequest, weatherSuccess, weatherFailure } from './action'
import { API_URL } from './../constants'

const fetchWeatherDetails = () => {
	return (dispatch) => {
		// Loading State
		dispatch(weatherRequest())

		axios
			.get(API_URL)
			.then((response) => {
				// Success State
				const fiveDayData = response.data?.list.filter((reading) => reading.dt_txt.includes('18:00:00')) || []
				dispatch(weatherSuccess(fiveDayData))
			})
			.catch((err) => {
				// Failure State
				const errorMessage = err.response.data?.message
				dispatch(weatherFailure(errorMessage))
			})
	}
}

export default fetchWeatherDetails
