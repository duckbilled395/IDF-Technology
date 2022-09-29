import { setNextStep } from '../../shared/store/signUp/actions'
import { AppDispatch } from '../../shared/store'

export const handleOnClick = (dispatch: AppDispatch) => {
	dispatch(setNextStep(2))
}