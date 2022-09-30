import { InitialStateType, signUpActionTypes, signUpTypeEnum } from './types'

const initialState: InitialStateType = {
	breadcrumbs: {
		first: 'SignUpInfo',
		second: 'PersonalInfo',
		third: 'Resume',
		order: 1
	},
	signUpData: {
		phone: '+375',
		email: '',
		password: '',
		repeatPassword: ''
	},
	personalInfo: {
		firstName: '',
		lastName: '',
		sex: 'Female',
		date: '',
		ocean: '',
		hobby: []
	}
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export const signUp = (state = initialState, action: signUpActionTypes ): InitialStateType => {
	switch (action.type) {
		case signUpTypeEnum.SET_STEP_ORDER:
			return { ...state, breadcrumbs: { ...state.breadcrumbs, order: action.payload } }
		case signUpTypeEnum.SET_SIGNUP_DATA:
			return { ...state, signUpData: { ...state.signUpData, ...action.payload} }
		case signUpTypeEnum.SET_PERSONAL_INFO:
			return { ...state, personalInfo: { ...state.personalInfo, ...action.payload} }
		default:
			return state
	}
}

export default signUp
