import React from 'react'
import { useFormik } from 'formik'
import { Button, TextField } from '@mui/material'

import { getSignUpInfo } from 'shared/store/signUp/selectors'
import { useAppDispatch, useAppSelector } from 'shared/hooks'
import { handleOnSubmitSignUp, validationSchema } from './lib'

import styles from './styles.module.scss'

const SignUpForm: React.FC = () => {
    window.scroll(0, 0);

    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            phone: useAppSelector((state) => getSignUpInfo(state).phone),
            email: useAppSelector((state) => getSignUpInfo(state).email),
            password: useAppSelector((state) => getSignUpInfo(state).password),
            repeatPassword: useAppSelector((state) => getSignUpInfo(state).repeatPassword)
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleOnSubmitSignUp(values, dispatch)
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
