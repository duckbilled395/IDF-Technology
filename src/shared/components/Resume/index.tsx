import React from 'react'
import { Button } from '@mui/material'

import { useAppDispatch, useAppSelector } from 'shared/hooks'
import { getPersonalInfo, getSignUpInfo } from 'shared/store/signUp/selectors'
import { handleOnClickChangePersonalInfo, handleOnClickChangeSignUp } from 'shared/components/PersonalInfoForm/lib'

import styles from './styles.module.scss'

const Resume: React.FC = () => {
	window.scroll(0, 0)

	const dispatch = useAppDispatch()

	const signUpInfo = useAppSelector((state) => getSignUpInfo(state))
	const personalInfo = useAppSelector((state) => getPersonalInfo(state))

	return (
		<div className={styles.root}>
			<div className={styles.signUpInfo}>
				<h5 className={styles.title}>SignUp Information</h5>
				<div className={styles.text}>Phone: {signUpInfo.phone}</div>
				<div className={styles.text}>email: {signUpInfo.email}</div>
				<div className={styles.text}>password: {signUpInfo.password}</div>
			</div>
			<div className={styles.personalInfo}>
				<h5 className={styles.title}>Personal Information</h5>
				<div className={styles.text}>First name: {personalInfo.firstName}</div>
				<div className={styles.text}>Last name: {personalInfo.lastName}</div>
				<div className={styles.text}>Sex: {personalInfo.sex}</div>
				<div className={styles.text}>Favorite ocean: {personalInfo.ocean}</div>
				<div className={styles.text}>Hobby: {personalInfo.hobby.map(item => item + ', ')}</div>
			</div>
			<div className={styles.btnBox}>
				<Button
					className={styles.btn}
					color='primary'
					variant='contained'
					fullWidth
					type='button'
					onClick={() => handleOnClickChangeSignUp(dispatch)}
				>Change SignUp Information</Button>
				<Button
					className={styles.btn}
					color='primary'
					variant='contained'
					fullWidth
					type='button'
					onClick={() => handleOnClickChangePersonalInfo(dispatch)}
				>Change Personal Information</Button>
			</div>
		</div>
	)
}

export default Resume
