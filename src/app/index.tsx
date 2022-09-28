import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Pages from 'pages'

import './styles/global.scss'

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Pages />
		</BrowserRouter>
	)
}

export default App
