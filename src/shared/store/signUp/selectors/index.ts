import { AppStateType } from '../../index'

export const getBreadcrumbs = (state: AppStateType) => {
	return state.signUp.breadcrumbs
}