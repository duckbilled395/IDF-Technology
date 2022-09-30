import React from 'react'

import BreadcrumbsBox from 'shared/components/BreadcrumbsBox'
import SignUpForm from 'shared/components/SignUpForm'
import { getBreadcrumbs } from 'shared/store/signUp/selectors'
import PersonalInfoForm from 'shared/components/PersonalInfoForm'
import Resume from 'shared/components/Resume'
import { useAppSelector } from 'shared/hooks'

import styles from './styles.module.scss'

const SignUp: React.FC = () => {

	const breadcrumbsStep = useAppSelector(state => getBreadcrumbs(state)).order

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<BreadcrumbsBox />
				{breadcrumbsStep === 1 && <SignUpForm/>}
				{breadcrumbsStep === 2 && <PersonalInfoForm />}
				{breadcrumbsStep === 3 && <Resume />}
			</div>
		</div>
	)
}

export default SignUp
