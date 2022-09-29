import React from 'react'

import styles from './styles.module.scss'
import logo from '../../assets/img/logo.svg'

const Footer: React.FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<div className={styles.footer}>
					<div className={styles.footer__text}>@duckbilled395</div>
					<img className={styles.footer__logo} src={logo} alt='logo' />
				</div>
			</div>
		</div>
	)
}

export default Footer