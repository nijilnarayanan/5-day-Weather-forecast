import React from 'react'
import {Wrapper,Day,DateTime,Icon,Temperature,Description} from './style'
import moment from 'moment'
import PropTypes from 'prop-types'

const Card = ({weatherData}) => {
    console.log({weatherData})
    const {dt,main : {temp}, weather} =weatherData || {}
    const {description,icon} =weather[0]

    let newDate = new Date()
    const weekday = dt * 1000   // converting into milliseconds
    newDate.setTime(weekday)
    

    const day = moment(weekday).format('ddd')
    const dateAndTime = moment(weekday).format('Do, MMM')
    const degreeCelsius = temp - 273.15 // converting kelvin to Degree Celsius
    
    return (
        <Wrapper>
        <Day>{day}</Day>
        <DateTime>{dateAndTime}</DateTime>
        <Icon src={`http://openweathermap.org/img/w/${icon}.png`}/>
        <Temperature>{Math.round(degreeCelsius)}°C
        </Temperature>
        <Description>{description}</Description>
        </Wrapper>
    )
}

Card.propTypes = {

}

export default Card
