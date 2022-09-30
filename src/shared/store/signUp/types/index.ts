export type InitialStateType = {
	breadcrumbs: breadcrumbsI
	signUpData: signUpDataI
	personalInfo: personalInfoI
}

interface breadcrumbsI {
	first: string,
	second: string,
	third: string,
	order: number
}

export interface signUpDataI {
	phone: string,
	email: string,
	password: string,
	repeatPassword: string
}

export interface personalInfoI {
	firstName: string,
	lastName: string,
	sex: string,
	date: string,
	ocean: string,
	hobby: string[]
}

export enum signUpTypeEnum {
	SET_STEP_ORDER = 'SET_STEP_ORDER',
	SET_SIGNUP_DATA = 'SET_SIGNUP_DATA',
	SET_PERSONAL_INFO = 'SET_PERSONAL_INFO'
}

export type setNextStepType = {
	type: signUpTypeEnum.SET_STEP_ORDER,
	payload: number | any
}

export type setSignUpDataType = {
	type: signUpTypeEnum.SET_SIGNUP_DATA,
	payload: signUpDataI
}

export type setPersonalInfoType = {
	type: signUpTypeEnum.SET_PERSONAL_INFO,
	payload: personalInfoI
}

export type signUpActionTypes = setNextStepType | setSignUpDataType | setPersonalInfoType
