import { data } from 'shared/schema'
import { AppDispatch } from 'shared/store'
import { setNextStep, setPersonalInfo } from 'shared/store/signUp/actions'
import { personalInfoI } from 'shared/store/signUp/types'

const Yup = require('yup')

const firstNameRequired = data.firstName.required
const firstNameMax = data.firstName.maxLength
const firstNameMin = data.firstName.minLength

const lastNameRequired = data.lastName.required
const lastNameMax = data.lastName.maxLength
const lastNameMin = data.lastName.minLength

const dateRequired = data.birthday.required
// const dateMax = data.birthday.maxAge
// const dateMin = data.birthday.minAge

const oceanRequired = data.hobby.required

const hobbyRequired = data.hobby.required

export const validationSchema = Yup.object({
        firstName: Yup
            .lazy(() => {
                if (firstNameRequired) {
                    return Yup
                        .string('Enter your first name')
                        .required('First name is required')
                        .max(firstNameMax, 'First name is too long')
                        .min(firstNameMin, 'First name is too short')
                } else {
                    return Yup
                        .string('Enter your first name')
                        .max(firstNameMax, 'First name is too long')
                        .min(firstNameMin, 'First name is too short')
                }
            }),
        lastName: Yup
            .lazy(() => {
                if (lastNameRequired) {
                    return Yup
                        .string('Enter your last name')
                        .required('Last name is required')

                } else {
                    return Yup
                        .string('Enter your last name')
                        .max(lastNameMax, 'Last name is too long')
                        .min(lastNameMin, 'Last name is too short')
                }
            }),
        date: Yup
            .lazy(() => {
                if (dateRequired) {
                    return Yup
                        .string('Enter correct date')
                        .required('Date name is required')
                } else {
                    return Yup
                        .string('Enter correct date')
                }
            }),
    ocean: Yup
        .lazy(() => {
            if (oceanRequired) {
                return Yup
                    .string('Choose one ocean')
                    .required('Required')

            } else {
                return Yup
                    .string('Choose one ocean')
            }
        }),
    hobby: Yup
        .lazy(() => {
            if (hobbyRequired) {
                return Yup
                    .string('Choose one hobby')
                    .required('Required')

            } else {
                return Yup
                    .string('Choose one hobby')
            }
        }),
    }
)

export const handleOnSubmitSignUp = (values: personalInfoI, dispatch: AppDispatch) => {
    dispatch(setPersonalInfo(values))
    dispatch(setNextStep(3))
}

export const handleOnClickChangeSignUp = (dispatch: AppDispatch) => {
    dispatch(setNextStep(1))
}

export const handleOnClickChangePersonalInfo = (dispatch: AppDispatch) => {
    dispatch(setNextStep(2))
}
