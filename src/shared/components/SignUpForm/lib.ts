import { data } from '../../schema'
import { AppDispatch } from '../../store'
import { setNextStep, setSignUpData } from '../../store/signUp/actions'
import { signUpDataI } from '../../store/signUp/types'

const Yup = require('yup')

const regExpPhone = new RegExp(data.mobilePhone.regExp)
const phoneRequired = data.mobilePhone.required

const regExpEmail = new RegExp(data.email.regExp)
const emailRequired = data.email.required

const passwordRequired = data.password.required
const passwordMax = data.password.maxLength
const passwordMin = data.password.minLength

export const validationSchema = Yup.object({
	phone: Yup
		.lazy(() => {
			if (phoneRequired) {
				return Yup.string('Enter your phone').required('Phone is required').matches(regExpPhone, 'Enter correct phone number')
			} else {
				return Yup.string('Enter your phone').matches(regExpPhone, 'Enter correct phone number')
			}
		}),
	email: Yup
		.lazy(() => {
			if (emailRequired) {
				return Yup.string('Enter your email').required('Email is required').matches(regExpEmail, 'Enter correct email')
			} else {
				return Yup.string('Enter your email').matches(regExpPhone, 'Enter correct email')
			}
		}),
	password: Yup
		.lazy(() => {
			if (passwordRequired) {
				return Yup.string('Enter your password').required('Password is required').max(passwordMax, 'Password is too long').min(passwordMin, 'Password is too short')
			} else {
				return Yup.string('Enter your password').max(passwordMax, 'Password is too long').min(passwordMin, 'Password is too short')
			}
		}),
	repeatPassword: Yup
		.lazy(() => {
			if (passwordRequired) {
				return Yup.string().required('Please, repeat password')
					.oneOf([Yup.ref('password'), null], 'Passwords must match')
			} else {
				return Yup.string()
					.oneOf([Yup.ref('password'), null], 'Passwords must match')
			}
		})
})

export const handleOnSubmitSignUp = (values: signUpDataI, dispatch: AppDispatch) => {
	dispatch(setSignUpData(values))
	dispatch(setNextStep(2))
}
