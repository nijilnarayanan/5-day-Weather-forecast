import React from 'react'
import { Provider } from 'react-redux'
import store from './Redux/store'
import Header from './Header'
import WeatherContainer from './WeatherContainer'
import Band from './Band'
import './App.css'

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Header />
				<WeatherContainer />
				<Band />
			</div>
		</Provider>
	)
}

export default App
