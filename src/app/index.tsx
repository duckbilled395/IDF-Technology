import React from 'react'
import { Provider } from 'react-redux'

import Pages from 'pages'
import store from '../shared/store'

import './styles/global.scss'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Pages />
		</Provider>
	)
}

export default App
