import { WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_FAILURE } from './actionTypes'

export const weatherRequest = () => {
	return {
		type: WEATHER_REQUEST,
	}
}

export const weatherSuccess = (response) => {
	return {
		type: WEATHER_SUCCESS,
		response,
	}
}

export const weatherFailure = (response) => {
	return {
		type: WEATHER_FAILURE,
		response,
	}
}
