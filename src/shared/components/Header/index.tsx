import React from 'react'

import logo from '../../assets/img/logo.svg'

import styles from './styles.module.scss'

const Header: React.FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.header}>
					<img className={styles.header__logo} src={logo} alt="logo"/>
                    <div className={styles.header__text}>Header Title</div>
				</div>
            </div>
        </div>
    )
}

export default Header