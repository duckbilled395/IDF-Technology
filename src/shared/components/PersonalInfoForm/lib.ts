import {data} from 'shared/schema'
import {AppDispatch} from 'shared/store'
import {setNextStep, setSignUpData} from 'shared/store/signUp/actions'
import {signUpDataI} from 'shared/store/signUp/types'

const Yup = require('yup')

const firstNameRequired = data.firstName.required
const firstNameMax = data.firstName.maxLength
const firstNameMin = data.firstName.minLength

const lastNameRequired = data.lastName.required
const lastNameMax = data.lastName.maxLength
const lastNameMin = data.lastName.minLength

const dateRequired = data.birthday.required
const dateMax = data.birthday.maxAge
const dateMin = data.birthday.minAge

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


    }
)

export const handleOnSubmitSignUp = (values: signUpDataI, dispatch: AppDispatch) => {
    dispatch(setSignUpData(values))
    dispatch(setNextStep(2))
}
