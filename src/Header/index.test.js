import React from 'react'
import { mount } from 'enzyme'
import Header from './index'

test('Run Test <Header />', () => {
	const component = mount(<Header />)
	expect(component.debug()).toMatchSnapshot()
})
