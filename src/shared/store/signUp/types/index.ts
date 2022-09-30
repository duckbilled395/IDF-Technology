export type InitialStateType = {
	breadcrumbs: breadcrumbsI
	signUpData: signUpDataI
}

interface breadcrumbsI {
	first: string,
	second: string,
	order: number
}

export interface signUpDataI {
	phone: string,
	email: string,
	password: string,
	repeatPassword: string
}

export enum signUpTypeEnum {
	SET_STEP_ORDER = 'SET_STEP_ORDER',
	SET_SIGNUP_DATA = 'SET_SIGNUP_DATA'
}

export type setNextStepType = {
	type: signUpTypeEnum.SET_STEP_ORDER,
	payload: number | any
}

export type setSignUpDataType = {
	type: signUpTypeEnum.SET_SIGNUP_DATA,
	payload: signUpDataI
}

export type signUpActionTypes = setNextStepType | setSignUpDataType
