import axios from 'axios'
import { weatherRequest, weatherSuccess, weatherFailure } from './action'
import { API_URL } from './../constants'

const fetchWeatherDetails = () => {
	return (dispatch) => {
		// Loading State
		dispatch(weatherRequest)

		axios
			.get(API_URL)
			.then((response) => {
				const fiveDayData = response.data?.list.filter((reading) => reading.dt_txt.includes('18:00:00'))
				dispatch(weatherSuccess(fiveDayData))
			})
			.catch((err) => {
				const errorMessage = err.response?.data
				dispatch(weatherFailure)
			})
	}
}

export default fetchWeatherDetails
