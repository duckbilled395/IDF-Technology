import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppStateType } from '../store'
import { bindActionCreators } from 'redux'

import * as SignUpActionCreators from '../store/signUp/actions/index'

export const ActionCreators = {
	...SignUpActionCreators,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(ActionCreators, dispatch)
}

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector