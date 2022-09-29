import { setNextStepType, setSignUpDataType, signUpDataI, signUpTypeEnum } from '../types'

export const setNextStep = (order: number): setNextStepType => ({
	type: signUpTypeEnum.SET_STEP_ORDER,
	payload: order
})

export const setSignUpData = (values: signUpDataI): setSignUpDataType => ({
	type: signUpTypeEnum.SET_SIGNUP_DATA,
	payload: values
})
