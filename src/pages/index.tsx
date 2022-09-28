import React from 'react'

import Header from 'shared/components/Header'
import Footer from 'shared/components/Footer'
import SignUp from './SignUp'

const Pages: React.FC = () => {
	return (
		<>
			<Header />
			<SignUp />
			<Footer />
		</>
	)
}

export default Pages