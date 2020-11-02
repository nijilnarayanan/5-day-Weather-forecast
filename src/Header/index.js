import React, { Fragment } from 'react'
import { Wrapper, HeaderText, Location, Icon, City } from './style'
import location from '../location.png'

const Header = () => {
	return (
		<Fragment>
			<Wrapper>
				<HeaderText>5 Day Weather Forecast</HeaderText>
				<Location>
					<Icon src={location} />
					<City>Mai</City>
				</Location>
			</Wrapper>
		</Fragment>
	)
}

export default Header
