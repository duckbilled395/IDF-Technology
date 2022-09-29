import React from 'react'
import { useFormik } from 'formik'

import { Button, TextField } from '@mui/material'

import styles from './styles.module.scss'
import { handleOnSubmitSignUp, validationSchema } from './lib'
import { useAppDispatch } from '../../hooks'

const SignUpForm: React.FC = () => {

	const dispatch = useAppDispatch()

	const formik = useFormik({
		initialValues: {
			phone: '+375',
			email: '',
			password: '',
			repeatPassword: ''
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			handleOnSubmitSignUp(values, dispatch)
			console.log(values)
		}
	})



	return (
		<div className={styles.root}>
			<form className={styles.form} onSubmit={formik.handleSubmit}>
				<TextField
						fullWidth
						id='phone'
						name='phone'
						label='Phone'
						value={formik.values.phone}
						onChange={formik.handleChange}
						error={formik.touched.phone && Boolean(formik.errors.phone)}
						helperText={formik.touched.phone && formik.errors.phone}
						/>
				<TextField
					fullWidth
					id='email'
					name='email'
					label='Email'
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<TextField
					fullWidth
					id='password'
					name='password'
					label='Password'
					type='password'
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<TextField
					fullWidth
					id='repeatPassword'
					name='repeatPassword'
					label='Repeat password'
					type='password'
					value={formik.values.repeatPassword}
					onChange={formik.handleChange}
					error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
					helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
				/>
				<Button color='primary' variant='contained' fullWidth type='submit'>
					Submit
				</Button>
			</form>
		</div>
	)
}

export default SignUpForm
