import React from 'react'
import Header from './Header'
import WeatherContainer from './WeatherContainer'
import Band from './Band'
import './App.css'

function App() {
	return (
		<div className='App'>
			<Header />
			<WeatherContainer />
			<Band />
		</div>
	)
}

export default App
