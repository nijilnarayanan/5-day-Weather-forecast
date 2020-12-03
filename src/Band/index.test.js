import React from 'react'
import { mount } from 'enzyme'
import Band from './index'

test('Run Test <Band />', () => {
	const component = mount(<Band />)
	expect(component.debug()).toMatchSnapshot()
})
