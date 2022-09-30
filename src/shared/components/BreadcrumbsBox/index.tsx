import React from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Link } from '@mui/material'

import { handleOnClickSignUpInfo } from './lib'
import { getBreadcrumbs } from '../../store/signUp/selectors'

import styles from './styles.module.scss'
import { useActions, useAppDispatch, useAppSelector } from '../../hooks'

const BreadcrumbsBox: React.FC = () => {
	const dispatch = useAppDispatch()
	const {setNextStep} = useActions()
	const breadcrumbs = useAppSelector(state => getBreadcrumbs(state))

	return (
		<div className={styles.breadcrumbs}>
			{breadcrumbs.order === 1 &&
				<Breadcrumbs aria-label='breadcrumb'>
					<Typography color='inherit'>{breadcrumbs.first}</Typography>
				</Breadcrumbs>
			}
			{breadcrumbs.order === 2 &&
				<Breadcrumbs aria-label='breadcrumb'>
					<Link className={styles.breadcrumbs__link} underline='hover' color='#6FC6FF'
						  onClick={() => handleOnClickSignUpInfo(dispatch, setNextStep)}>{breadcrumbs.first}</Link>
					<Typography color='inherit'>{breadcrumbs.second}</Typography>
				</Breadcrumbs>
			}
		</div>
	)
}

export default BreadcrumbsBox
