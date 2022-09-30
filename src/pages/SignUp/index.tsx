import React from 'react'
import {Button} from '@mui/material'

import BreadcrumbsBox from 'shared/components/BreadcrumbsBox'
import {getBreadcrumbs} from "shared/store/signUp/selectors";
import SignUpForm from 'shared/components/SignUpForm'
import {useAppDispatch, useAppSelector} from 'shared/hooks'
import PersonalInfoForm from 'shared/components/PersonalInfoForm';
import {handleOnClick} from './lib'

import styles from './styles.module.scss'


const SignUp = () => {
    const dispatch = useAppDispatch()

    // const breadcrumbsStep = useAppSelector(state => getBreadcrumbs(state)).order
    const breadcrumbsStep = 2

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <BreadcrumbsBox/>
				{/*{breadcrumbsStep === 1 && <SignUpForm/>}*/}
				{breadcrumbsStep === 2 && <PersonalInfoForm/>}

                <Button variant='contained' onClick={() => handleOnClick(dispatch)}>Next</Button>
            </div>
        </div>
    )
}

export default SignUp
