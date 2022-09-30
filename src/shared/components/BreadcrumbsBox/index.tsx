import React from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Link } from '@mui/material'

import { useActions, useAppDispatch, useAppSelector } from 'shared/hooks'
import { getBreadcrumbs } from 'shared/store/signUp/selectors'
import { handleOnClickPersonalInfo, handleOnClickSignUpInfo } from './lib'

import styles from './styles.module.scss'

const BreadcrumbsBox: React.FC = () => {
	const dispatch = useAppDispatch()
	const {setNextStep} = useActions()
	const breadcrumbs = useAppSelector(state => getBreadcrumbs(state))

	return (
		<div className={styles.breadcrumbs}>
			{breadcrumbs.order === 1 &&
				<Breadcrumbs aria-label='breadcrumb'>
					<Typography color='#ffffff'>{breadcrumbs.first}</Typography>
				</Breadcrumbs>
			}
			{breadcrumbs.order === 2 &&
				<Breadcrumbs aria-label='breadcrumb'>
					<Link className={styles.breadcrumbs__link} underline='hover' color='#01588d'
						  onClick={() => handleOnClickSignUpInfo(dispatch, setNextStep)}>{breadcrumbs.first}</Link>
					<Typography color='inherit'>{breadcrumbs.second}</Typography>
				</Breadcrumbs>
			}
			{breadcrumbs.order === 3 &&
				<Breadcrumbs aria-label='breadcrumb'>
					<Link className={styles.breadcrumbs__link} underline='hover' color='#01588d'
						  onClick={() => handleOnClickSignUpInfo(dispatch, setNextStep)}>{breadcrumbs.first}</Link>
					<Link className={styles.breadcrumbs__link} underline='hover' color='#01588d'
						  onClick={() => handleOnClickPersonalInfo(dispatch, setNextStep)}>{breadcrumbs.second}</Link>
					<Typography color='inherit'>{breadcrumbs.third}</Typography>
				</Breadcrumbs>
			}
		</div>
	)
}

export default BreadcrumbsBox
