import React from 'react'

import Header from 'shared/components/Header'
import Footer from 'shared/components/Footer'
import SignUp from './SignUp'

import styles from './styles.module.scss'

const Pages: React.FC = () => {
	return (
		<div className={styles.main}>
			<Header />
			<SignUp />
			<Footer />
		</div>
	)
}

export default Pages