import React from 'react'
import { Button } from '@mui/material'

import { handleOnClick } from './lib'
import BreadcrumbsBox from '../../shared/components/BreadcrumbsBox'

import styles from './styles.module.scss'
import SignUpForm from '../../shared/components/SignUpForm'
import { useAppDispatch } from '../../shared/hooks'

const SignUp = () => {
	const dispatch = useAppDispatch()

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<BreadcrumbsBox />
				<SignUpForm />
				<Button variant='contained' onClick={() => handleOnClick(dispatch)}>Next</Button>
			</div>
		</div>
	)
}

export default SignUp
