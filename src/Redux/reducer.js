import { WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_FAILURE } from './actionTypes'

const initialState = {
	loading: false,
	data: [],
	error: {},
}

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case WEATHER_REQUEST:
			return {
				...state,
				loading: true,
			}

		case WEATHER_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.response,
				error: {},
			}

		case WEATHER_FAILURE:
			return {
				...state,
				loading: false,
				data: {},
				error: action.response,
			}

		default:
			return state
	}
}

export default weatherReducer
