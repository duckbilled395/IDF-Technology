import { AppStateType } from 'shared/store'

export const getBreadcrumbs = (state: AppStateType) => {
	return state.signUp.breadcrumbs
}

export const getSignUpInfo = (state: AppStateType) => {
	return state.signUp.signUpData
}

export const getPersonalInfo = (state: AppStateType) => {
	return state.signUp.personalInfo
}

