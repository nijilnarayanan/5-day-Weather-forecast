import React from 'react'
import { Wrapper, Day, DateTime, Icon, Temperature, Description } from './style'
import moment from 'moment'
import PropTypes from 'prop-types'

const Card = ({ weatherData }) => {
	const {
		dt,
		main: { temp },
		weather,
	} = weatherData || {}
	const { description, icon } = weather[0] || {}

	const weekday = dt * 1000 // converting into milliseconds

	const day = moment(weekday).format('ddd')
	const dateAndTime = moment(weekday).format('Do, MMM')
	const degreeCelsius = temp - 273.15 // converting Kelvin to Degree Celsius

	return (
		<Wrapper>
			<Day>{day}</Day>
			<DateTime>{dateAndTime}</DateTime>
			<Icon src={`https://openweathermap.org/img/w/${icon}.png`} />
			<Temperature>{Math.round(degreeCelsius)}°C</Temperature>
			<Description>{description}</Description>
		</Wrapper>
	)
}

Card.defaultProp = {
	weatherData: {},
}
Card.propTypes = {
	weatherData: PropTypes.shape({}),
}

export default Card
