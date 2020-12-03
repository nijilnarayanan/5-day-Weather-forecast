import React from 'react'
import { mount } from 'enzyme'
import Card from './index'

test('Run Test <Card />', () => {
	const component = mount(<Card />)
	expect(component.debug()).toMatchSnapshot()
})
