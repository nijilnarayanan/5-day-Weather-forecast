import React from 'react'
import { mount } from 'enzyme'
import App from './App'

test('Run Test <App />', () => {
	const component = mount(<App />)
	expect(component.debug()).toMatchSnapshot()
})
